import { ResponseError } from "../error/response-error.js";
import blogService from "../service/blog-service.js";
import fs from "fs";

const getBlog = async (req, res, next) => {
    try {
        const result = await blogService.getBlog();
        res.status(200).json({
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

const getBlogId = async (req, res, next) => {
    try {
        const params = req.params.id;

        const result = await blogService.getBlogId(params);

        res.status(200).json({
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

const createBlog = async (req, res, next) => {
    try {
        if (!req.file) {
            throw new ResponseError(Error.name, "please, input field image");
        }

        const user = req.user;
        const title = req.body.title;
        const content = req.body.content;
        const image = req.file.path;

        const result = await blogService.createBlog(user, { title, content, image });
        res.status(200).json({
            data: result,
        });
    } catch (error) {
        next(error);

        if (req.file) {
            fs.unlinkSync(req.file.path);
        }
    }
};

const updateBlog = async (req, res, next) => {
    try {
        // di ambil dari auth-middleware
        const user = req.user;

        const idBlog = req.params.id;
        const request = req.body;

        const result = await blogService.updateBlog(user, idBlog, request);
        res.status(200).json({
            data: result,
        });

        console.info(result);
    } catch (error) {
        next(error);
        if (req.file) {
            fs.unlinkSync(req.file.path);
        }
    }
};

const deleteBlog = async (req, res, next) => {
    try {
    } catch (error) {
        next(error);
    }
};

export default {
    getBlog,
    getBlogId,
    createBlog,
    updateBlog,
    deleteBlog,
};
