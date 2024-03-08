import { ResponseError } from "../response/response-error.js";

export const errorMiddleware = (err, req, res, next) => {
    if (!err) {
        next();
        return;
    }

    if (err instanceof ResponseError) {
        res.status(err.status)
            .json({
                code: err.status,
                errors: err.message,
            })
            .end();
    } else {
        res.status(500)
            .json({
                code: 500,
                errors: err.message,
            })
            .end();
    }
};
