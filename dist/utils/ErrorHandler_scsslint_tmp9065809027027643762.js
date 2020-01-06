"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpErrors_1 = require("./httpErrors");
exports.notFoundError = () => {
    throw new httpErrors_1.HTTP404Error('Not found.');
};
exports.clientError = (err, res, next) => {
    if (err instanceof httpErrors_1.HTTPClientError) {
        console.warn(err);
        res.status(err.statusCode).send(err.message);
    }
    else {
        next(err);
    }
};
exports.serverError = (err, res, next) => {
    console.error(err);
    if (process.env.NODE_ENV === 'production') {
        res.status(500).send('Internal Server Error');
    }
    else {
        res.status(500).send(err.stack);
    }
};
//# sourceMappingURL=ErrorHandler_scsslint_tmp9065809027027643762.js.map