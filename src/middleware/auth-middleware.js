import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
    const token = req.cookies.authToken;

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
