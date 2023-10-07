import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
    // const bearer = req.headers["authorization"];
    // const token = bearer.split(" ")[1];
    // const token = req.headers.authorization;
    const token = req.headers.authorization.split(" ")[1];

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
