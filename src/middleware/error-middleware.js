import { ResponseError } from "../error/response-error.js";

export const errorMiddleware = (err, req, res, next) => {
    if (!err) {
        next();
        return;
    }

    if (err instanceof ResponseError) {
        res.status(err.status).json({
            errors: err.message,
        });
    } else {
        res.status(500)
            .json({
                errors: err.message,
            })
            .end();
    }
};
