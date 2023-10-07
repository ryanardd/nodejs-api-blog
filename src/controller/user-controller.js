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
        const user = req.body;

        const token = jwt.sign({ user: user.username }, process.env.ACCESS_TOKEN_SECRET);

        // user.token = token;

        const result = await userService.login(user);
        res.header("Authorization", token);
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
        console.info(result);
        res.status(200).json({
            data: result,
            message: "Updated Successfuly",
        });
    } catch (error) {
        next(error);
    }
};

export default {
    register,
    login,
    update,
};
