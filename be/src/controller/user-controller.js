import { ResponseError } from "../error/response-error.js";
import userService from "../service/user-service.js";
import jwt from "jsonwebtoken";

const get = async (req, res, next) => {
    try {
        const id = req.user.id_user;

        const result = await userService.get(id);
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
        res.status(200).send(payload);
    } catch (error) {
        next(error);
    }
};

const update = async (req, res, next) => {
    try {
        const id = req.params.id;
        const request = req.body;

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
        res.status(200).clearCookie("token").json({
            message: "Logout Successfuly",
        });
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
