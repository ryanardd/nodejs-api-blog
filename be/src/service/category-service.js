import { prismaClient } from "../app/database.js";
import { ResponseError } from "../error/response-error.js";
import {
    addCategoryValidation,
    getCategoryIdValidation,
} from "../validation/category-validation.js";
import { validate } from "../validation/validation.js";

const get = async () => {
    return prismaClient.category.findMany({
        select: {
            name: true,
            post: true,
        },
    });
};

const getId = async (id) => {
    id = validate(getCategoryIdValidation, id);
    console.log(id);

    const data = await prismaClient.category.findFirst({
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
const update = async (request) => {};
const remove = async (request) => {};

export default {
    get,
    getId,
    add,
    update,
    remove,
};
