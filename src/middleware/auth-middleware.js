import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
    const authHeaders = req.headers["authorization"];
    const token = authHeaders.split("")[1];

    if (!token) {
        return res.status(401).json({
            errors: "Unauthorization",
        });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({
                errors: "Forbidden",
            });
        }

        req.user = user;

        next();
    });
};
