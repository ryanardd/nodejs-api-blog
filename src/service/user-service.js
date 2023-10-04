import { prismaClient } from "../app/database.js";
import { ResponseError } from "../error/response-error.js";
import { loginUserValidation, registerUserValidation } from "../validation/user-validation.js";
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

    const token = jwt.sign(user.username, process.env.ACCESS_TOKEN_SECRET);

    user.token = token;

    return user;

    // return prismaClient.user.findUnique({
    //     where: {
    //         username: user.username,
    //     },
    //     select: {
    //         name: true,
    //         username: true,
    //         email: true,
    //         token: true,
    //     },
    // });
};

export default {
    register,
    login,
};
