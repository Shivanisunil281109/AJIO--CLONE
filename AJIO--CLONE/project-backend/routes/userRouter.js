
import { Router } from "express";
import { getUserProfile, updateUserProfile,updatePassword ,getAllProducts
 } from "../controllers/user.controllers.js";
 import token from "../middleware/authMiddlewares.js";

const UserRouter = Router();

UserRouter.get("/profile", getUserProfile);

UserRouter.put("/profile", updateUserProfile);

UserRouter.put("/update-password", token, updatePassword);

UserRouter.get("/products", getAllProducts);


export default UserRouter;
