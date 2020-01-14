"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpErrors_1 = require("./httpErrors");
exports.notFoundError = () => {
    throw new httpErrors_1.HTTP404Error('Not found');
};
exports.notAuthorizedError = () => {
    throw new httpErrors_1.HTTP401Error('Not authorized');
};
exports.clientError = (err, res, next) => {
    if (err instanceof httpErrors_1.HTTPClientError) {
        console.warn(err);
        res.status(err.statusCode).send({
            error: err.message,
        });
    }
    else {
        next(err);
    }
};
exports.serverError = (err, res, next) => {
    console.error(err);
    if (process.env.NODE_ENV === 'production') {
        res.status(500).send({
            error: 'Internal Server Error',
        });
    }
    else {
        res.status(500).send(err.stack);
    }
};
//# sourceMappingURL=ErrorHandler.js.map