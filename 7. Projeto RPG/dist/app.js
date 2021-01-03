"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var Guerreiro_1 = __importDefault(require("./Guerreiro"));
var Mago_1 = __importDefault(require("./Mago"));
var guerreiro_blaster = new Guerreiro_1.default(120, 35, 10, 10, 5);
var mago_negro_do_caos = new Mago_1.default(100, 20, 5, 15, 20);
console.log(mago_negro_do_caos.atacar(guerreiro_blaster));
console.log(guerreiro_blaster.atacar(mago_negro_do_caos));
console.log('----------');
console.log(mago_negro_do_caos.reviver());
console.log(guerreiro_blaster.reviver());
