"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const R = __importStar(require("ramda"));
exports.applyMiddleware = (middleware, router) => {
    const addMiddleware = (f) => f(router);
    R.forEach(addMiddleware, middleware);
};
//# sourceMappingURL=index_scsslint_tmp7711590081115123516.js.map