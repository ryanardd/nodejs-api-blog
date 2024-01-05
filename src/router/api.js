import express from "express";
import userController from "../controller/user-controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";
import blogController from "../controller/blog-controller.js";

const route = new express.Router();

// public
route.get("/blogs", blogController.getBlog);
route.post("/user/register/", userController.register);
route.post("/user/login/", userController.login);

// users
route.use(authMiddleware);
route.get("/user/:id", userController.get);
route.patch("/user/updated/:id", userController.update);
route.delete("/user/logout", userController.logout);

// blog
route.get("/blog/:id", blogController.getBlogId);
route.post("/blog", blogController.createBlog);
route.patch("/blog/:id", blogController.updateBlog);
route.delete("/blog/:id", blogController.deleteBlog);

export { route };
