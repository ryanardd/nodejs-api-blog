import { prismaClient } from "../app/database.js";
import { createBlogValidation } from "../validation/blog-validation.js";
import { validate } from "../validation/validation.js";

const getBlog = async (request) => {};

const getBlogId = async (request) => {};

const createBlog = async (user, request) => {
    request = validate(createBlogValidation, request);

    request.id = user.author_id;

    return prismaClient.post.create({
        data: request,
        include: {
            user: true,
        },
    });
};

const updateBlog = async (request) => {};

const deleteBlog = async (request) => {};

export default {
    getBlog,
    getBlogId,
    createBlog,
    updateBlog,
    deleteBlog,
};
