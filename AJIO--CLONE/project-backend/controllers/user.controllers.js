import UserSchema from "../models/users.schema.js";
import ProductSchema from "../models/product.schema.js";
import CartSchema from "../models/cart.schema.js";
import bcrypt from "bcrypt";

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





export const updatePassword = async (req, res) => {
    try {
        const userId = req.user._id;
        const { currentPassword, newPassword, confirmPassword } = req.body;

        if (!currentPassword || !newPassword || !confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Please fill all password fields."
            });
        }

        if (newPassword !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "New password and confirm password do not match."
            });
        }

        if (
            newPassword.length < 8 ||
            !/[A-Z]/.test(newPassword) ||
            !/[a-z]/.test(newPassword) ||
            !/[0-9]/.test(newPassword)
        ) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 8 characters and include uppercase, lowercase and a number."
            });
        }

        const user = await UserSchema.findById(userId);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found."
            });
        }

        const isPasswordValid = await bcrypt.compare(
            currentPassword,
            user.password
        );

        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Current password is incorrect."
            });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        user.password = hashedPassword;
        await user.save();

        return res.status(200).json({
            success: true,
            message: "Password updated successfully."
        });

    } catch (error) {
        console.error("Update password error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to update password."
        });
    }
};






export const getAllProducts = async (req, res) => {
    try {
        const products = await ProductSchema.find({
            approvedByAdmin: true,
            stock: { $gt: 0 }
        });

        return res.status(200).json({
            success: true,
            products
        });

    } catch (error) {
        console.error("Get all products error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch products."
        });
    }
};




export const getProductDetails = async (req, res) => {
    try {
        const { productId } = req.params;

        if (!productId) {
            return res.status(400).json({
                success: false,
                message: "Product ID is required."
            });
        }

        const product = await ProductSchema.findById(productId);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found."
            });
        }

        return res.status(200).json({
            success: true,
            product
        });

    } catch (error) {
        console.error("Get product details error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch product details."
        });
    }
};






export const addToCart = async (req, res) => {
    try {
        const { productId } = req.params;
        const userId = req.user._id;

        if (!productId) {
            return res.status(400).json({
                success: false,
                message: "Product ID is required."
            });
        }

        const product = await ProductSchema.findById(productId);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found."
            });
        }

        let cart = await CartSchema.findOne({ user: userId });

        if (!cart) {
            cart = new CartSchema({
                user: userId,
                products: [{
                    product: productId,
                    quantity: 1,
                    selectedSize: "M"
                }]
            });
        } else {
            const alreadyExists = cart.products.some((item) => {
                const existingProductId = item.product
                    ? item.product.toString()
                    : item.toString();

                return existingProductId === productId;
            });

            if (alreadyExists) {
                return res.status(200).json({
                    success: true,
                    message: "Product is already in your cart."
                });
            }

            cart.products.push({
                product: productId,
                quantity: 1,
                selectedSize: "M"
            });
        }

        await cart.save();

        return res.status(201).json({
            success: true,
            message: "Product successfully added to cart."
        });

    } catch (error) {
        console.error("Add to cart error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to add product to cart."
        });
    }
};













export const getCartProducts = async (req, res) => {
    try {
        const userId = req.user._id;

        const cart = await CartSchema.findOne({ user: userId })
            .populate("products.product");

        if (!cart) {
            return res.status(200).json({
                success: true,
                products: []
            });
        }

        const products = cart.products
            .filter((item) => item.product)
            .map((item) => ({
                ...item.product.toObject(),
                quantity: item.quantity,
                selectedSize: item.selectedSize
            }));

        return res.status(200).json({
            success: true,
            products
        });

    } catch (error) {
        console.error("Get cart products error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch cart products."
        });
    }
};









export const removeFromCart = async (req, res) => {
    try {
        const { productId } = req.params;
        const userId = req.user._id;

        const cart = await CartSchema.findOne({ user: userId });

        if (!cart) {
            return res.status(404).json({
                success: false,
                message: "Cart not found."
            });
        }

        const getProductId = (item) => {
            if (item?.product?._id) {
                return item.product._id.toString();
            }

            if (item?.product) {
                return item.product.toString();
            }

            if (item?._id) {
                return item._id.toString();
            }

            return item?.toString();
        };

        const productExists = cart.products.some(
            (item) => getProductId(item) === productId
        );

        if (!productExists) {
            return res.status(404).json({
                success: false,
                message: "Product not found in cart."
            });
        }

        cart.products = cart.products.filter(
            (item) => getProductId(item) !== productId
        );

        await cart.save();

        return res.status(200).json({
            success: true,
            message: "Seller product removed from cart."
        });

    } catch (error) {
        console.error("Remove from cart error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to remove product from cart."
        });
    }
};





export const updateCartProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const { quantity, selectedSize } = req.body;
        const userId = req.user._id;

        const cart = await CartSchema.findOne({ user: userId });

        if (!cart) {
            return res.status(404).json({
                success: false,
                message: "Cart not found."
            });
        }

        const cartItem = cart.products.find((item) => {
            const existingProductId = item.product
                ? item.product.toString()
                : item.toString();

            return existingProductId === productId;
        });
        if (!cartItem) {
            return res.status(404).json({
                success: false,
                message: "Product not found in cart."
            });
        }

        if (quantity !== undefined) {
            const parsedQuantity = Number(quantity);

            if (
                !Number.isInteger(parsedQuantity) ||
                parsedQuantity < 1 ||
                parsedQuantity > 3
            ) {
                return res.status(400).json({
                    success: false,
                    message: "Quantity must be between 1 and 3."
                });
            }

            cartItem.quantity = parsedQuantity;
        }

        if (selectedSize !== undefined) {
            const validSizes = ["S", "M", "L", "XL", "XXL"];

            if (!validSizes.includes(selectedSize)) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid product size."
                });
            }

            cartItem.selectedSize = selectedSize;
        }

        await cart.save();

        return res.status(200).json({
            success: true,
            message: "Cart product updated successfully."
        });

    } catch (error) {
        console.error("Update cart product error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to update cart product."
        });
    }
};
