import express from "express";
import userController from "../controller/user-controller.js";

const publicRoute = express.Router();

publicRoute.post("/api/user/register/", userController.register);
publicRoute.post("/api/user/login/", userController.login);

export { publicRoute };
