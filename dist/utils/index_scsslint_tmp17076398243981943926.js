"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyMiddleware = (middleware, router) => {
    for (const f of middleware) {
        f(router);
    }
};
//# sourceMappingURL=index_scsslint_tmp17076398243981943926.js.map