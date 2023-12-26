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

const get = async (user) => {
    return prismaClient.user.findMany({
        select: {
            username: true,
            id_user: true,
            name: true,
        },
    });
};

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
            id_user: true,
            name: true,
            username: true,
            email: true,
        },
    });
};

const update = async (user, request) => {
    request = validate(updateUserValidation, request);

    const countUser = await prismaClient.user.count({
        where: {
            id_user: user.id,
        },
    });
    // console.log(user);
    // console.log(countUser);

    if (!user) {
        throw new ResponseError(404, "user null");
    }

    if (countUser !== 1) {
        throw new ResponseError(404, "Id is notfound");
    }

    const data = {};
    if (request.username) {
        data.username = request.username;
    }

    if (request.name) {
        data.name = request.name;
    }

    if (request.email) {
        data.email = request.email;
    }

    if (request.password) {
        data.password = await bcrypt.hash(request.password, 10);
    }

    console.info(data);

    const update = await prismaClient.user.update({
        where: {
            id_user: request,
        },
        data: data,
        select: {
            id_user: true,
            username: true,
            name: true,
            email: true,
        },
    });

    return update;
};

const logout = async (request) => {};

export default {
    get,
    register,
    login,
    update,
    logout,
};
