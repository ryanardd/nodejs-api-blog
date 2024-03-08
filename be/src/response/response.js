export const response = (statusCode, data, message, res) => {
    res.status(statusCode).json({
        code: statusCode,
        data: data,
        message: message,
    });
};
