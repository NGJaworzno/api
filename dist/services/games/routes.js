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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const R = __importStar(require("ramda"));
const Game_entity_1 = __importDefault(require("../../entities/Game.entity"));
const ErrorHandler = __importStar(require("../../utils/ErrorHandler"));
const routes = [
    {
        path: '/v1/games',
        method: 'get',
        handler: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            const games = yield typeorm_1.getRepository(Game_entity_1.default)
                .createQueryBuilder("game")
                .getMany();
            res.status(200);
            res.send({
                games,
            });
        }),
    },
    {
        path: '/v1/games',
        method: 'post',
        handler: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            if (R.isNil(req.user)) {
                ErrorHandler.notAuthorizedError();
                return;
            }
            yield typeorm_1.getConnection()
                .createQueryBuilder()
                .insert()
                .into(Game_entity_1.default)
                .values(req.body)
                .execute();
            res.status(200);
            res.send(null);
        }),
    },
];
exports.default = routes;
//# sourceMappingURL=routes.js.map