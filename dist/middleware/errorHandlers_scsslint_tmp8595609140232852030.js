"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorHandler = __importStar(require("../utils/ErrorHandler"));
const httpErrors_1 = require("../utils/httpErrors");
const handle404Error = (router) => {
    router.use(() => {
        ErrorHandler.notFoundError();
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
        if (process.env.NODE_ENV === 'production') {
            res.status(500).send('Internal Server Error');
        }
        else {
            res.status(500).send(err.stack);
        }
    });
};
exports.default = [handle404Error, handleClientErrors, handleServerErrors];
//# sourceMappingURL=errorHandlers_scsslint_tmp8595609140232852030.js.map