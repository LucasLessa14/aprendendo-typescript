"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var Personagem_1 = __importDefault(require("./Personagem"));
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(hp, attack, defense, critical, escape) {
        return _super.call(this, hp, attack, defense, critical, escape) || this;
    }
    return Mago;
}(Personagem_1.default));
exports.default = Mago;
