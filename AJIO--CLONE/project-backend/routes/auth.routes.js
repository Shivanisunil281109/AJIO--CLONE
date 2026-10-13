
import { Router } from "express";
import token from "../middleware/authMiddlewares.js";


import {
    registerController,
    loginController
} from "../controllers/auth.controllers.js";

const AuthRouter = Router();

AuthRouter.post("/register", registerController);

AuthRouter.post("/login", loginController);

AuthRouter.get("/get-current-user", token, (req, res) => {
    return res.status(200).json({
        success: true,
        user: req.user
    });
});

export default AuthRouter;
