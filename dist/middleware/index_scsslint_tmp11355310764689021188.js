"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandlers_1 = __importDefault(require("./errorHandlers"));
exports.default = [
    handleCors,
    handleBodyRequestParsing,
    handleCompression,
    ...errorHandlers_1.default,
];
//# sourceMappingURL=index_scsslint_tmp11355310764689021188.js.map