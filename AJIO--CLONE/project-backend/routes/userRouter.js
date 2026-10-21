
import { Router } from "express";
import { getUserProfile, updateUserProfile } from "../controllers/user.controllers.js";

const UserRouter = Router();

UserRouter.get("/profile", getUserProfile);

UserRouter.put("/profile", updateUserProfile);

export default UserRouter;
