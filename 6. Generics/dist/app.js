"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Dao_1 = require("./Dao");
var concessionaria = new Concessionaria_1.default('Av. Paulista');
var pessoa = new Pessoa_1.default('José', 'Palio');
var dao1 = new Dao_1.Dao();
var dao2 = new Dao_1.Dao();
dao1.atualizar(concessionaria);
dao2.inserir(pessoa);
