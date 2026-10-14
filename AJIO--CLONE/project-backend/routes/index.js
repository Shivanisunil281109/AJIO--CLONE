






import { Router } from "express";
import AuthRouter from "./auth.routes.js";
import AdminRouter from "./admin.routes.js";
import SellerRouter from "./seller.routes.js";
import token, { roleValidator } from "../middleware/authMiddlewares.js";

const MainRouter = Router();

MainRouter.use("/auth", AuthRouter);

MainRouter.use(
    "/admin",
    token,
    roleValidator("admin"),
    AdminRouter
);

MainRouter.use(
    "/seller",
    token,
    roleValidator("seller"),
    SellerRouter
);

export default MainRouter;
