import { prismaClient } from "../app/database.js";
import { ResponseError } from "../error/response-error.js";
import { createBlogValidation, getIdBlogValidation } from "../validation/blog-validation.js";
import { validate } from "../validation/validation.js";

const getBlog = async () => {
    return prismaClient.user.findMany({
        select: {
            name: true,
            post: true,
        },
    });
};

const getBlogId = async (params) => {
    params = validate(getIdBlogValidation, params);

    const data = await prismaClient.post.findFirst({
        where: {
            id_post: params,
        },
        select: {
            id_post: true,
            title: true,
            content: true,
            img: true,
            created_at: true,
            author_id: true,
            user: {
                select: {
                    id_user: true,
                    username: true,
                    email: true,
                },
            },
        },
    });

    if (!data) {
        throw new ResponseError(404, "data is not found");
    }

    return data;
};

const createBlog = async (user, request) => {
    user = await prismaClient.user.findUnique({
        where: {
            id_user: user.id_user,
        },
    });

    if (!user) {
        throw new ResponseError(404, "user is not found");
    }

    const data = validate(createBlogValidation, request);

    if (!data) {
        throw new ResponseError(400, "data null");
    }

    return prismaClient.post.create({
        data: {
            author_id: user.id_user,
            title: data.title,
            content: data.content,
            img: data.image,
        },
        select: {
            id_post: true,
            title: true,
            content: true,
            img: true,
            author_id: true,
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
