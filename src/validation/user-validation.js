import Joi from "joi";

export const registerUserValidation = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    username: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(100).required(),
});

export const loginUserValidation = Joi.object({
    username: Joi.string().min(3).max(100).required(),
    password: Joi.string().min(3).max(100).required(),
});

export const updateUserValidation = Joi.object({
    username: Joi.string().min(3).max(100).required(),
    name: Joi.string().min(3).max(100).optional(),
    email: Joi.string().email().optional(),
    password: Joi.string().min(3).max(100).optional(),
});
