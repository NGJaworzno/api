"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpErrors_1 = require("../utils/httpErrors");
const handle404Error = (router) => {
    router.use((req, res) => {
        throw new httpErrors_1.HTTP404Error('Resource not found.');
    });
};
const handleClientErrors = (router) => {
    router.use((err, req, res, next) => {
        if (err instanceof httpErrors_1.HTTPClientError) {
            console.error(err);
            res.status(err.status).send(err.message);
        }
        else {
            next(err);
        }
    });
};
const handleServerErrors = (router) => {
    router.use((err, req, res, next) => {
        console.error(err);
        if (process.env.NODE_ENV === "production") {
            res.status(500).send('Internal Server Error\'););
        }
        else {
            res.status(500).send(err.stack);
        }
    });
};
exports.default = [handle404Error, handleClientErrors, handleServerErrors];
//# sourceMappingURL=errorHandlers_scsslint_tmp13397769436719808715.js.map