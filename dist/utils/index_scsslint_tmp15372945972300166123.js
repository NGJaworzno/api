"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyMiddleware = (middleware, router) => {
    const addMiddleware = (f) => f(router);
    R.forEach(addMiddleware, middleware);
};
//# sourceMappingURL=index_scsslint_tmp15372945972300166123.js.map