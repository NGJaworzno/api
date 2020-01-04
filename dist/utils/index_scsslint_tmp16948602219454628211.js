"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyMiddleware = (middleware, router) => {
    for (const f of middleware) {
        f(router);
    }
};
//# sourceMappingURL=index_scsslint_tmp16948602219454628211.js.map