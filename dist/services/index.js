"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = __importDefault(require("./status/routes"));
const routes_2 = __importDefault(require("./auth/routes"));
const routes = [
    ...routes_1.default,
    ...routes_2.default,
];
exports.default = routes;
//# sourceMappingURL=index.js.map