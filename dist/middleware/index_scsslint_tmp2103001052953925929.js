"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
const errorHandlers_1 = require("./errorHandlers");
exports.default = [
    common_1.handleCors,
    common_1.handleBodyRequestParsing,
    common_1.handleCompression,
    errorHandlers_1.handle404Error,
    errorHandlers_1.handleClientErrors,
    errorHandlers_1.handleServerErrors,
];
//# sourceMappingURL=index_scsslint_tmp2103001052953925929.js.map