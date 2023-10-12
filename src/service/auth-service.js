import jwt from "jsonwebtoken";

const generateToken = (user) => {
    const id = user.id;
    const name = user.name;
    const username = user.username;
    return jwt.sign({ id, name, username }, process.env.ACCESS_TOKEN_SECRET);
};

export default {
    generateToken,
    // verifyToken,
};
