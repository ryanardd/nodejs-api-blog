import jwt from "jsonwebtoken";

const generateToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
};

export default {
    generateToken,
    // verifyToken,
};
