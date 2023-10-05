import { prismaClient } from "../app/database.js";
import { ResponseError } from "../error/response-error.js";
import {
    loginUserValidation,
    registerUserValidation,
    updateUserValidation,
} from "../validation/user-validation.js";
import { validate } from "../validation/validation.js";
import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

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

    const user = await prismaClient.user.findUnique({
        where: {
            username: request.username,
        },
        select: {
            username: true,
            password: true,
        },
    });

    if (!user) {
        throw new ResponseError(401, "Username or password wrong");
    }

    const comparePass = await bcrypt.compare(request.password, user.password);

    if (!comparePass) {
        throw new ResponseError(401, "Username or password wrong");
    }

    // const token = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET);

    // user.token = token;

    // return user;

    return prismaClient.user.findUnique({
        where: {
            username: user.username,
        },
        select: {
            name: true,
            username: true,
            email: true,
        },
    });
};

const update = async (request) => {
    request = validate(updateUserValidation, request);

    const countUser = await prismaClient.user.count({
        where: {
            id_user: request,
        },
    });

    if (countUser !== 1) {
        throw new ResponseError(404, "Username is not found");
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

    return prismaClient.user.update({
        where: {
            id_user: request,
        },
        data: data,
        select: {
            username: true,
            name: true,
            email: true,
        },
    });
};

export default {
    register,
    login,
    update,
};
