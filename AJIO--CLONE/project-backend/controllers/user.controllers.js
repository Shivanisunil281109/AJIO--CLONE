import UserSchema from "../models/users.schema.js";

export const getUserProfile = async (req, res) => {
    try {
        const userId = req.user._id;

        const user = await UserSchema.findById(userId)
       .select("name email mobile gender dob");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found."
            });
        }

        return res.status(200).json({
            success: true,
            profile: user
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to fetch user profile."
        });
    }
};




export const updateUserProfile = async (req, res) => {
    try {
        const userId = req.user._id;
        const { firstName, lastName, email, mobile, gender, dob } = req.body;

        if (!firstName || !lastName || !email || !mobile) {
            return res.status(400).json({
                success: false,
                message: "Please fill all profile fields."
            });
        }

        const name = `${firstName.trim()} ${lastName.trim()}`.trim();

      
const user = await UserSchema.findByIdAndUpdate(
    userId,
    {
        name,
        email: email.trim(),
        mobile: mobile.trim(),
        gender,
        dob
    },
    {
        new: true,
        runValidators: true
    }
).select("name email mobile gender dob");





        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found."
            });
        }

        return res.status(200).json({
            success: true,
            message: "Profile updated successfully.",
            profile: user
        });


} catch (error) {
    if (error.code === 11000) {
        const field = Object.keys(error.keyPattern || {})[0];

        return res.status(409).json({
            success: false,
            message: `This ${field} is already registered.`
        });
    }

    if (error.name === "ValidationError") {
        return res.status(400).json({
            success: false,
            message: "Please enter valid profile details."
        });
    }

    console.error("Update profile error:", error);

    return res.status(500).json({
        success: false,
        message: "Failed to update user profile."
    });
}





if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return res.status(400).json({
        success: false,
        message: "Please enter a valid email address."
    });
}

if (!/^[6-9]\d{9}$/.test(mobile.trim())) {
    return res.status(400).json({
        success: false,
        message: "Please enter a valid 10-digit mobile number."
    });
}

if (!firstName.trim() || !lastName.trim()) {
    return res.status(400).json({
        success: false,
        message: "First name and last name are required."
    });
}


};