import UserSchema from "../models/users.schema.js";

export const registerController = async (req, res) => {
    try {
        const { name, email, mobile, gender, inviteCode } = req.body;

        const otp = Math.floor(100000 + Math.random() * 900000).toString();
console.log("REGISTER API HIT");
        console.log("Generated OTP:", otp);

        const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

        if (!name || !email || !mobile || !gender) {
            return res.status(400).json({
                success: false,
                message: "All required fields are required."
            });
        }

        const isEmailExists = await UserSchema.findOne({ email });

        if (isEmailExists) {
            return res.status(400).json({
                success: false,
                message: "Email already exists. Please login."
            });
        }

        const isMobileExists = await UserSchema.findOne({ mobile });

        if (isMobileExists) {
            return res.status(400).json({
                success: false,
                message: "Mobile number already exists. Please login."
            });
        }

        const newUser = await UserSchema.create({
            name,
            email,
            mobile,
            gender,
            inviteCode,
            otp,
              otpExpiry,
              isVerified: false
        });


        console.log(newUser, "newUser");

        
        return res.status(201).json({
            success: true,
            message: "Registration successful.",
            user: newUser
        });

    } catch (error) {
        console.log(error, "error");

        return res.status(500).json({
            error,
            success: false
        });
    }
};




export const verifyOtpController = async (req, res) => {
    try {
        const { mobile, otp } = req.body;

        if (!mobile || !otp) {
            return res.status(400).json({
                success: false,
                message: "Mobile and OTP are required."
            });
        }

        const user = await UserSchema.findOne({ mobile });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found."
            });
        }

        if (user.otp !== otp) {
            return res.status(400).json({
                success: false,
                message: "Invalid OTP."
            });
        }

        if (new Date() > user.otpExpiry) {
            return res.status(400).json({
                success: false,
                message: "OTP has expired."
            });
        }

        user.isVerified = true;
        await user.save();

        return res.status(200).json({
            success: true,
            message: "OTP verified successfully."
        });

    } catch (error) {
        console.log(error, "error");

        return res.status(500).json({
            success: false,
            message: "Something went wrong."
        });
    }
};