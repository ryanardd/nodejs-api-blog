import express from "express";
import userController from "../controller/user-controller.js";

const route = express.Router();

route.post("/api/user/register/", userController.register);
route.post("/api/user/login/", userController.login);

export { route };
