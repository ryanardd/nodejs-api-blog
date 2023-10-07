import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
    // const bearer = req.headers["authorization"];
    // const token = bearer.split(" ")[1];
    const bearer = req.headers.authorization;
    const token = bearer && bearer.split(" ")[1];

    console.log(token);
    if (!token && !bearer) {
        return res.status(401).json({
            errors: "Unauthorization",
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        req.user = decoded;

        if (req.user !== req.body.username) {
            return res.status(403).json({ message: "Access denied" });
        }

        next();
        // jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        //     if (err) {
        //         return res.status(403).json({
        //             errors: "Forbidden",
        //         });
        //     }

        //     req.user = user;

        //     next();
        // });
    } catch (error) {
        next(error);
    }
};
