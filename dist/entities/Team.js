"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Game_1 = __importDefault(require("./Game"));
/* eslint import/no-cycle:0 */
const Participant_1 = __importDefault(require("./Participant"));
let Team = class Team {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Team.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Team.prototype, "reserve", void 0);
__decorate([
    typeorm_1.OneToOne(() => Game_1.default),
    typeorm_1.JoinColumn(),
    __metadata("design:type", typeof (_a = typeof Game_1.default !== "undefined" && Game_1.default) === "function" ? _a : Object)
], Team.prototype, "game", void 0);
__decorate([
    typeorm_1.OneToMany(() => Participant_1.default, (participant) => participant.team, {
        eager: true,
    }),
    __metadata("design:type", Array)
], Team.prototype, "participants", void 0);
Team = __decorate([
    typeorm_1.Entity()
], Team);
exports.default = Team;
//# sourceMappingURL=Team.js.map