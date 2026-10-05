
import { Router } from "express";


const AuthRouter = Router();

AuthRouter.post("/register", registerController)


export default AuthRouter;