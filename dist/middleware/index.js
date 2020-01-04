"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __importDefault(require("./common"));
const errorHandlers_1 = __importDefault(require("./errorHandlers"));
exports.default = [
    ...common_1.default,
    ...errorHandlers_1.default,
];
//# sourceMappingURL=index.js.map