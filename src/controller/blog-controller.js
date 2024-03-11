import { ResponseError } from "../response/response-error.js";
import { response } from "../response/response.js";
import blogService from "../service/blog-service.js";
import fs from "fs";

const getBlog = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;

        const search = {
            title: req.query.title,
        };

        const result = await blogService.getBlog(page, search);

        response(200, result, "get all data blog", res);
    } catch (error) {
        next(error);
    }
};

const getBlogId = async (req, res, next) => {
    try {
        const params = req.params.id;

        const result = await blogService.getBlogId(params);

        response(200, result, "get data blog by id", res);
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
        const category = req.body.category;
        const image = `public/image/${req.file.filename}`;

        const result = await blogService.createBlog(user, { title, content, category, image });
        response(200, result, "blog created successfully", res);
    } catch (error) {
        next(error);

        if (req.file) {
            fs.unlinkSync(req.file.path);
        }
    }
};

const updateBlog = async (req, res, next) => {
    try {
        // taken from auth-middleware
        const user = req.user;

        const idBlog = req.params.id;
        const title = req.body.title;
        const content = req.body.content;
        const category = req.body.category;
        const image = req.file?.filename;

        const result = await blogService.updateBlog(user, idBlog, {
            title,
            content,
            category,
            image,
        });
        response(200, result, "updated blog successfully", res);
    } catch (error) {
        next(error);
        if (req.file) {
            fs.unlinkSync(req.file.path);
        }
    }
};

const deleteBlog = async (req, res, next) => {
    try {
        const user = req.user;
        const id = req.params.id;

        const result = await blogService.deleteBlog(user, id);
        response(200, result, "deleted blog successfully", res);
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
