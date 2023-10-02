import express from "express";
import userController from "../controller/user-controller.js";

const route = express.Router();

route.post("/api/user/register/", userController.register);

export { route };
