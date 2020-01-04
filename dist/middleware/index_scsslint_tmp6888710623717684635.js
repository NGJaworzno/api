"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
const errorHandlers_1 = __importDefault(require("./errorHandlers"));
exports.default = [
    common_1.handleCors,
    common_1.handleBodyRequestParsing,
    common_1.handleCompression,
    ...errorHandlers_1.default,
];
//# sourceMappingURL=index_scsslint_tmp6888710623717684635.js.map