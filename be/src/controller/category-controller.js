import categoryService from "../service/category-service.js";

const get = async (req, res, next) => {
    try {
        const result = await categoryService.get();

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
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

const add = async (req, res, next) => {
    try {
        const result = await categoryService.add(req.body);
        res.status(200).json({
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

const update = async (req, res, next) => {
    try {
        const id = req.params.id;
        const request = req.body;

        const result = await categoryService.update(id, request);

        res.status(200).json({
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

const remove = async (req, res, next) => {
    try {
        const id = req.params.id;

        const result = await categoryService.remove(id);

        res.status(200).json({
            message: "Deleted successfully",
        });
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
