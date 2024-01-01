import blogService from "../service/blog-service.js";

const getBlog = async (req, res, next) => {
    try {
    } catch (error) {
        next(error);
    }
};

const getBlogId = async (req, res, next) => {
    try {
    } catch (error) {
        next(error);
    }
};

const createBlog = async (req, res, next) => {
    try {
        const user = req.user;
        const request = req.body;

        const result = await blogService.createBlog(user, request);
        res.status(200).json({
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

const updateBlog = async (req, res, next) => {
    try {
    } catch (error) {
        next(error);
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
