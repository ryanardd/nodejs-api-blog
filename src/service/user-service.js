import { prismaClient } from "../app/database.js";
import { ResponseError } from "../error/response-error.js";
import { registerUserValidation } from "../validation/user-validation.js";
import { validate } from "../validation/validation.js";
import bcrypt from "bcrypt";

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

export default { register };
