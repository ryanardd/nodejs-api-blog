import express from "express";
import userController from "../controller/user-controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";
import blogController from "../controller/blog-controller.js";

const route = new express.Router();

// users
route.post("/api/user/register/", userController.register);
route.post("/api/user/login/", userController.login);
route.use(authMiddleware);
route.get("/users", userController.get);
route.patch("/user/updated/:id", userController.update);
route.delete("/user/logout", userController.logout);

// blog
route.get("/blogs", blogController.getBlog);
route.get("/blog/:id", blogController.getBlogId);
route.post("/blog", blogController.createBlog);
route.patch("/blog/:id", blogController.updateBlog);
route.delete("/blog/:id", blogController.deleteBlog);

export { route };
