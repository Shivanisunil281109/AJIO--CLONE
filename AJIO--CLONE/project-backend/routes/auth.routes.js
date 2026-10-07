import { Router } from "express";

import { registerController,verifyOtpController} from "../controllers/auth.controllers.js";

const AuthRouter = Router();

AuthRouter.post("/register", registerController);

AuthRouter.post("/verify-otp", verifyOtpController);

export default AuthRouter;