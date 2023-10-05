import express from "express";
import userController from "../controller/user-controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";

const route = express.Router();

route.post("/api/user/register/", userController.register);
route.post("/api/user/login/", userController.login);

route.use(authMiddleware);

route.patch("/api/user/update/", userController.update);

export { route };
