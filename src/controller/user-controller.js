import userService from "../service/user-service.js";
import jwt from "jsonwebtoken";

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
        const user = req.user;

        const token = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET);

        const result = await userService.login(req.body);
        res.header("auth-token", token);
        res.status(200).json({
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

const update = async (req, res, next) => {
    try {
        const request = req.body;
        const result = await userService.update(request);
        res.status(200).json({
            data: result,
            message: "Updated Successfuly",
        });
    } catch (error) {
        next();
    }
};

export default {
    register,
    login,
    update,
};
