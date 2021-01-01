"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
/* --- criar carros --- */
var carroA = new Carro_1.default('HB20', 4);
var carroB = new Carro_1.default('Celta', 4);
var carroC = new Carro_1.default('Palio', 2);
/* --- criar concessionaria --- */
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.default("Av. Paulista", listaDeCarros);
/* --- criar pessoas --- */
var cliente = new Pessoa_1.default("José", "HB20");
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido())
        cliente.comprarCarro(carro);
});
console.log(cliente.dizerCarroQueTem());
