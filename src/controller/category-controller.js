import { response } from "../response/response.js";
import categoryService from "../service/category-service.js";

const get = async (req, res, next) => {
    try {
        const result = await categoryService.get();

        response(200, result, "get data categories", res);
    } catch (error) {
        next(error);
    }
};

const getId = async (req, res, next) => {
    try {
        const id = req.params.id;

        const result = await categoryService.getId(id);
        response(200, result, "get data category by id", res);
    } catch (error) {
        next(error);
    }
};

const add = async (req, res, next) => {
    try {
        const result = await categoryService.add(req.body);
        response(200, result, "category created successfully", res);
    } catch (error) {
        next(error);
    }
};

const update = async (req, res, next) => {
    try {
        const id = req.params.id;
        const request = req.body;

        const result = await categoryService.update(id, request);

        response(200, result, "updated category successfully", res);
    } catch (error) {
        next(error);
    }
};

const remove = async (req, res, next) => {
    try {
        const id = req.params.id;

        const result = await categoryService.remove(id);

        response(200, result, "deleted category successfully", res);
    } catch (error) {
        next(error);
    }
};

export default {
    get,
    getId,
    add,
    update,
    remove,
};
