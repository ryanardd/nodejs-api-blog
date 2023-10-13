import { prismaClient } from "../app/database.js";
import { ResponseError } from "../error/response-error.js";
import {
    getUserValidation,
    loginUserValidation,
    registerUserValidation,
    updateUserValidation,
} from "../validation/user-validation.js";
import { validate } from "../validation/validation.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (request) => {
    request = validate(registerUserValidation, request);

    const countUser = await prismaClient.user.count({
        where: {
            username: request.username,
        },
    });

    if (countUser === 1) {
        throw new ResponseError(404, "User already exists");
    }

    request.password = await bcrypt.hash(request.password, 10);

    return prismaClient.user.create({
        data: request,
        select: {
            name: true,
            username: true,
            email: true,
        },
    });
};

const get = async (user) => {
    return prismaClient.user.findMany({
        select: {
            username: true,
            id_user: true,
            name: true,
        },
    });
};

const login = async (request) => {
    request = validate(loginUserValidation, request);

    const users = await prismaClient.user.findUnique({
        where: {
            username: request.username,
        },
    });

    if (!users) {
        throw new ResponseError(401, "Username or password wrong");
    }

    const comparePass = await bcrypt.compare(request.password, users.password);

    if (!comparePass) {
        throw new ResponseError(401, "Username or password wrong");
    }

    console.info(users);

    // return users;

    return prismaClient.user.findUnique({
        where: {
            username: users.username,
        },
        select: {
            name: true,
            username: true,
            email: true,
        },
    });
};

const update = async (request) => {
    const user = validate(updateUserValidation, request);

    const countUser = await prismaClient.user.count({
        where: {
            username: user.username,
            // id_user: user.id_user,
        },
    });

    if (countUser !== 1) {
        throw new ResponseError(404, "Username is not found");
    }

    const data = {};
    if (user.username) {
        data.username = user.username;
    }

    if (user.name) {
        data.name = user.name;
    }

    if (user.email) {
        data.email = user.email;
    }

    if (user.password) {
        data.password = await bcrypt.hash(user.password, 10);
    }

    console.info(data);

    const update = await prismaClient.user.update({
        where: {
            username: data.username,
            // id_user: data.id_user,
        },
        data: data,
        select: {
            username: true,
            name: true,
            email: true,
        },
    });

    return update;
};

export default {
    register,
    get,
    login,
    update,
};
