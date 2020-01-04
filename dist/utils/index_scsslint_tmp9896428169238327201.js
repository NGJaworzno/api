"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyMiddleware = (middleware, router) => {
    const addMiddleware = (f) => f(router);
    R.forEach(addMiddleware, middleware);
};
//# sourceMappingURL=index_scsslint_tmp9896428169238327201.js.map