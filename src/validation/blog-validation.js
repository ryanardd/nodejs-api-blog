import Joi from "joi";

export const createBlogValidation = Joi.object({
    title: Joi.string().min(3).required(),
    content: Joi.string().min(3).required(),
    category: Joi.number().required(),
    image: Joi.any().required(),
});

export const getBlogValidation = Joi.object({
    page: Joi.number().min(1).positive().default(1),
    size: Joi.number().min(1).max(100).positive().default(10),
});

export const getIdBlogValidation = Joi.number().positive().required();

export const updateBlogValidation = Joi.object({
    title: Joi.string().min(3).optional(),
    content: Joi.string().min(3).optional(),
    category: Joi.number().optional(),
    image: Joi.any().optional(),
});

export const searchBlogValidation = Joi.object({
    title: Joi.string().optional(),
});
