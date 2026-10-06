import UserSchema from "../models/users.schema.js";

export const registerController = async (req, res) => {
    try {
        const { name, email, mobile, gender, inviteCode } = req.body;

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
            inviteCode
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