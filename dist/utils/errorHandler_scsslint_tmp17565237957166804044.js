"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpErrors__1 = require("../utils/httpErrors\";");
exports.notFoundError = () => {
    throw new httpErrors__1.HTTP404Error("Method not found.");
};
exports.clientError = (err, res, next) => {
    if (err instanceof httpErrors__1.HTTPClientError) {
        console.warn(err);
        res.status(err.statusCode).send(err.message);
    }
    else {
        next(err);
    }
};
exports.serverError = (err, res, next) => {
    console.error(err);
    if (process.env.NODE_ENV === "production") {
        res.status(500).send("Internal Server Error");
    }
    else {
        res.status(500).send(err.stack);
    }
};
//# sourceMappingURL=errorHandler_scsslint_tmp17565237957166804044.js.map