import categoryService from "../service/category-service.js";

const get = async (req, res, next) => {
    try {
        const result = await categoryService.get();
        console.log(result);
        res.status(200).json({
            data: result,
        });
    } catch (error) {
        next(error);
    }
};
const getId = async (req, res, next) => {
    try {
        const id = req.params.id;

        const result = await categoryService.getId(id);
        res.status(200).json({
            result,
        });
    } catch (error) {
        next(error);
    }
};
const add = async (req, res, next) => {
    try {
        const result = await categoryService.add(req.body);
        res.status(200).json({
            result,
        });
    } catch (error) {
        next(error);
    }
};
const update = async (req, res, next) => {
    try {
    } catch (error) {
        next(error);
    }
};
const remove = async (req, res, next) => {
    try {
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
