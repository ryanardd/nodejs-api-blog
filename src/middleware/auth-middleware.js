import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    // const token = req.cookies.token;
    const token = req.headers.authorization;
    // console.info(user);
    if (!token) {
        return res.status(401).json({ message: "Token no provided" });
    }

    const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    if (decode === req.cookies.token) {
        req.user = decode;
    }

    if (token !== decode) {
        res.status(403).json({
            errors: "Forbidden",
        });
    }
};
