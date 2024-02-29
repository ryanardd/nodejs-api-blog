import { prismaClient } from "../app/database.js";
import { ResponseError } from "../error/response-error.js";
import {
    addCategoryValidation,
    getCategoryIdValidation,
    updateCategoryValidation,
} from "../validation/category-validation.js";
import { validate } from "../validation/validation.js";

const get = async () => {
    const data = await prismaClient.category.findMany({
        select: {
            id_category: true,
            name: true,
            post: true,
        },
    });

    if (!data) {
        throw new ResponseError(209, "no content");
    }

    return data;
};

const getId = async (id) => {
    id = validate(getCategoryIdValidation, id);

    const data = await prismaClient.category.findUnique({
        where: {
            id_category: id,
        },
    });

    if (!data) {
        throw new ResponseError(404, "id is not found");
    }

    return data;
};

const add = async (request) => {
    request = validate(addCategoryValidation, request);

    const data = await prismaClient.category.count({
        where: {
            name: request.name,
        },
    });

    if (data !== 0) {
        throw new ResponseError(409, "data category already exist");
    }

    return prismaClient.category.create({
        data: request,
    });
};

const update = async (id, request) => {
    id = validate(getCategoryIdValidation, id);

    const dataId = await prismaClient.category.count({
        where: {
            id_category: id,
        },
    });

    if (dataId !== 1) {
        throw new ResponseError(404, "id is not found");
    }

    request = validate(updateCategoryValidation, request);

    const updated = {};

    if (request.name) {
        updated.name = request.name;
    }

    return prismaClient.category.update({
        where: {
            id_category: id,
        },
        data: updated,
    });
};

const remove = async (id) => {
    id = validate(getCategoryIdValidation, id);

    const dataId = await prismaClient.category.count({
        where: {
            id_category: id,
        },
    });

    if (dataId !== 1) {
        throw new ResponseError(404, "id is not found");
    }

    return prismaClient.category.delete({
        where: {
            id_category: id,
        },
    });
};

export default {
    get,
    getId,
    add,
    update,
    remove,
};
