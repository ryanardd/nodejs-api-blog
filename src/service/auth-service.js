import jwt from "jsonwebtoken";

const generateToken = async (user) => {
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);

    user.token = token;
    return token;
};

export default {
    generateToken,
    // verifyToken,
};
