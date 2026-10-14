
import UserSchema from "../models/users.schema.js";

export const getAllSellers = async (req, res) => {
    try {
        const sellers = await UserSchema.find({
            role: "seller"
        }).select("name email mobile isApprovedByAdmin");

        return res.status(200).json({
            success: true,
            sellers
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error
        });
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const users = await UserSchema.find({
            role: "user"
        }).select("name email");

        return res.status(200).json({
            success: true,
            users
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error
        });
    }
};

export const approveSeller = async (req, res) => {
    try {
        const { sellerId } = req.body;

        if (!sellerId) {
            return res.status(400).json({
                success: false,
                message: "Seller is required."
            });
        }

        const seller = await UserSchema.findOneAndUpdate(
            { _id: sellerId, role: "seller" },
            { isApprovedByAdmin: true },
            { new: true }
        );

        if (!seller) {
            return res.status(404).json({
                success: false,
                message: "Seller not found."
            });
        }

        return res.status(200).json({
            success: true,
            message: "Seller approved."
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error
        });
    }
};
