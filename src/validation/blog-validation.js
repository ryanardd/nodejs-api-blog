import Joi from "joi";

export const createBlogValidation = Joi.object({
    title: Joi.string().min(3).required(),
    content: Joi.string().min(3).required(),
    image: Joi.any().required(),
});
