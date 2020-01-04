"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyMiddleware = (middleware, router) => {
    for (const f of middleware) {
        f(router);
    }
};
//# sourceMappingURL=index_scsslint_tmp9312242110000270783.js.map