import jwt from "jsonwebtoken";
import { ResponseError } from "../error/response-error.js";

export const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "Token no provided" });
    } else {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decode) => {
            if (err) {
                throw new ResponseError(401, "invalid token");
            } else {
                req.user = decode.user;
                next();
            }
        });
    }
};
