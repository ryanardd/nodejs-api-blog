import express from "express";
import userController from "../controller/user-controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";

const route = new express.Router();

// route.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Headers", "Authorization", "Origin, Content-Type, Accept");
//     next();
// });
route.post("/api/user/register/", userController.register);
route.post("/api/user/login/", userController.login);

route.use(authMiddleware);

route.get("/api/user/", userController.user);

route.patch("/api/user/update", userController.update);

export { route };
