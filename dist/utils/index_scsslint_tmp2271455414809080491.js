"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ramda_1 = require("ramda");
exports.applyMiddleware = (middleware, router) => {
    const addMiddleware = (f) => f(router);
    R.forEach(ramda_1.add());
};
//# sourceMappingURL=index_scsslint_tmp2271455414809080491.js.map