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
    const addMiddleware = (w) => w(router);
    R.forEach(addMiddleware, middleware);
};
exports.applyRoutes = (routes, router) => {
    const addRoute = (route) => {
        const { method, path, handler } = route;
        router[method](path, handler);
    };
    R.forEach(addRoute, routes);
    console.log(router.stack);
};
//# sourceMappingURL=index_scsslint_tmp1613348236694416484.js.map