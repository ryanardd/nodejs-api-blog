import { ResponseError } from "../error/response-error.js";
import userService from "../service/user-service.js";
import jwt from "jsonwebtoken";

const get = async (req, res, next) => {
    try {
        const userAuth = req.cookies.authToken;
        const result = await userService.get(userAuth);
        res.status(200).json({
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

const register = async (req, res, next) => {
    try {
        const request = req.body;

        const result = await userService.register(request);
        res.status(200).json({
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

const login = async (req, res, next) => {
    try {
        const user = req.body;

        const payload = await userService.login(user);
        const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" });

        res.cookie("token", token, {
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
        });
        res.status(200).send(
            payload
            // token: token,
        );
    } catch (error) {
        next(error);
    }
};

const update = async (req, res, next) => {
    try {
        let { id } = req.params;
        const request = req.body;
        console.log(id);
        // console.log(request);

        const result = await userService.update(id, request);

        console.info(result);
        res.status(200).json({
            data: result,
            message: "Updated Successfuly",
        });
    } catch (error) {
        next(error);
    }
};

const logout = async (req, res, next) => {
    try {
    } catch (error) {
        next(error);
    }
};

export default {
    get,
    register,
    login,
    update,
    logout,
};
