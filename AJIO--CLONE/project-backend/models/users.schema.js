import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    mobile: {
        type: String,
        required: true,
        unique: true
    },

    gender: {
        type: String,
        required: true
    },

    inviteCode: {
        type: String
    },

    role: {
        type: String,
        default: "user",
        enum: ["user", "seller", "admin"]
    }
});

const UserSchema = model("users", userSchema);

export default UserSchema;