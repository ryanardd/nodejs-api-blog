import Joi from "joi";

export const getCategoryIdValidation = Joi.number().positive().required();

export const addCategoryValidation = Joi.object({
    name: Joi.string().min(2).required(),
});

export const updateCategoryValidation = Joi.object({
    name: Joi.string().min(2),
});
