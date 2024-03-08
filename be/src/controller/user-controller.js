import { response } from "../response/response.js";
import userService from "../service/user-service.js";
import jwt from "jsonwebtoken";

const get = async (req, res, next) => {
    try {
        const id = req.user.id_user;

        const result = await userService.get(id);
        response(200, result, "get data user", res);
    } catch (error) {
        next(error);
    }
};

const register = async (req, res, next) => {
    try {
        const request = req.body;

        const result = await userService.register(request);
        response(200, result, "user register successfully", res);
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
        response(200, payload, "user login successfully", res);
    } catch (error) {
        next(error);
    }
};

const update = async (req, res, next) => {
    try {
        const id = req.params.id;
        const request = req.body;

        const result = await userService.update(id, request);

        response(200, result, "updated user successfully", res);
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
