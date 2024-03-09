import path from "path";
import { prismaClient } from "../app/database.js";
import { ResponseError } from "../response/response-error.js";
import {
    createBlogValidation,
    getIdBlogValidation,
    updateBlogValidation,
} from "../validation/blog-validation.js";
import { validate } from "../validation/validation.js";
import fs from "fs";

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
            category: true,
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
            category_id: data.category,
            img: data.image,
        },
        select: {
            id_post: true,
            title: true,
            content: true,
            img: true,
            author_id: true,
            user: {
                select: {
                    id_user: true,
                    username: true,
                    email: true,
                },
            },
            category: true,
        },
    });
};

const updateBlog = async (user, id, request) => {
    user = await prismaClient.user.findUnique({
        where: {
            id_user: user.id_user,
        },
    });

    if (!user) {
        throw new ResponseError(404, "user is not found");
    }

    id = validate(getIdBlogValidation, id);

    const idBlog = await prismaClient.post.findFirst({
        where: {
            id_post: id,
        },
    });

    if (!idBlog) {
        throw new ResponseError(404, "id is not found");
    }

    request = validate(updateBlogValidation, request);

    const update = {};

    if (request.title) {
        update.title = request.title;
    }

    if (request.content) {
        update.content = request.content;
    }

    if (request.category) {
        update.category = request.category;
    }
    console.log(idBlog.img);

    if (request.image !== undefined && request.image !== "") {
        update.image = `public/image/${request.image}`;
        if (idBlog.img !== update.image) {
            fs.unlinkSync(idBlog.img);
        }
    } else {
        update.image = idBlog.img;
    }

    return prismaClient.post.update({
        where: {
            id_post: id,
        },
        data: {
            title: update.title,
            content: update.content,
            category: update.category,
            img: update.image,
            updated_at: new Date(),
        },
        select: {
            id_post: true,
            title: true,
            content: true,
            img: true,
            author_id: true,
            user: {
                select: {
                    id_user: true,
                    username: true,
                    email: true,
                },
            },
            category: true,
        },
    });
};

const deleteBlog = async (id) => {
    id = validate(getIdBlogValidation, id);

    const data = await prismaClient.post.findFirst({
        where: {
            id_post: id,
        },
    });

    if (!data) {
        throw new ResponseError(404, "data is not found");
    }

    fs.unlinkSync(data.img);

    return prismaClient.post.delete({
        where: {
            id_post: id,
        },
    });
};

export default {
    getBlog,
    getBlogId,
    createBlog,
    updateBlog,
    deleteBlog,
};
