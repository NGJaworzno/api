"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyMiddleware = (middleware, router) => {
    const addMiddleware = (f) => f(router);
    R.forEach(addMiddleware);
};
//# sourceMappingURL=index_scsslint_tmp1961625300476850205.js.map