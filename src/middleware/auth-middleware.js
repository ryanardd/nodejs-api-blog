import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

export const authMiddleware = async (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "Token not provided" });
    }

    try {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.status(403).json({
                    errors: "Forbidden",
                });
            }

            req.user = user;
            // return user;
            next();
        });
    } catch (error) {
        next(error);
    }
};
