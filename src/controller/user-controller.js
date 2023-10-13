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

const user = async (req, res, next) => {
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

const login = async (req, res, next) => {
    try {
        const user = req.body;

        const result = await userService.login(user);
        const iat = Math.floor(Date.now() / 1000);
        const token = jwt.sign({ userId: result.username, iat }, process.env.ACCESS_TOKEN_SECRET);
        res.cookie("token", token, {
            httpOnly: true,
            expires: "50s",
        });
        res.status(200).send({
            token,
            // token: token,
        });
    } catch (error) {
        next(error);
    }
};

const update = async (req, res, next) => {
    try {
        const request = req.user;

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
    user,
    login,
    update,
};
