"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const routes = [
    {
        path: '/',
        method: 'get',
        handler: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            const firstUser = yield typeorm_1.getConnection()
                .getRepository(User)
                .createQueryBuilder("user")
                .where("user.id = :id", { id: 1 })
                .getOne();
            res.send('Hello world!');
        }),
    },
];
exports.default = routes;
//# sourceMappingURL=routes_scsslint_tmp8611500426946458533.js.map