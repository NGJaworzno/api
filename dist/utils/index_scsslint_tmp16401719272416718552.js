"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyMiddleware = (middleware, router) => {
    const addMiddleware = (f) => f(router);
    R.forEach(addMiddleware, middleware);
};
//# sourceMappingURL=index_scsslint_tmp16401719272416718552.js.map