"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const utils_1 = require("./utils");
const router = express_1.default();
utils_1.applyMiddleware();
const { PORT = 3000 } = process.env;
const server = http_1.default.createServer(router);
server.listen(PORT, () => (console.log(`Server is running http://localhost:${PORT}...`)));
//# sourceMappingURL=server_scsslint_tmp8361213285227460758.js.map