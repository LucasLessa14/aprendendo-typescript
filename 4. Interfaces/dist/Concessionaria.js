"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco) {
        this.endereco = endereco;
    }
    Concessionaria.prototype.fornecerHorariosDeFuncionamento = function () {
        return "De segunda a sexta de 8h as 18h";
    };
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    return Concessionaria;
}());
exports.default = Concessionaria;
;
