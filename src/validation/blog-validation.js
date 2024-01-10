import Joi from "joi";

export const createBlogValidation = Joi.object({
    title: Joi.string().min(3).required(),
    content: Joi.string().min(3).required(),
    image: Joi.any().required(),
});

export const getIdBlogValidation = Joi.number().positive().required();

export const updateBlogValidation = Joi.object({
    title: Joi.string().min(3).optional(),
    content: Joi.string().min(3).optional(),
    image: Joi.any().optional(),
});
