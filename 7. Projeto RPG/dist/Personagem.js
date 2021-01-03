"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Personagem = /** @class */ (function () {
    function Personagem(hp, attack, defense, critical, escape) {
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.critical = critical;
        this.escape = escape;
    }
    Personagem.prototype.atacar = function (personagem) {
        var dano = personagem.attack - this.defense;
        if (dano > 0) {
            console.log("Vida antes do ataque: HP " + this.hp);
            this.hp = this.hp - dano;
            console.log("Vida ap\u00F3s o ataque: HP " + this.hp);
        }
        else {
            console.log("Ataque Defendido: HP " + this.hp);
        }
    };
    Personagem.prototype.reviver = function () {
        console.log(this.hp);
        this.hp = this.hp * 1.3;
        console.log(this.hp);
    };
    return Personagem;
}());
exports.default = Personagem;
