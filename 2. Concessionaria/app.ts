import Carro from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'
 
/* --- criar carros --- */
let carroA = new Carro('HB20', 4);
let carroB = new Carro('Celta', 4);
let carroC = new Carro('Palio', 2);

/* --- criar concessionaria --- */
let listaDeCarros: Array<Carro> = [carroA, carroB, carroC]
let concessionaria = new Concessionaria("Av. Paulista", listaDeCarros);

/* --- criar pessoas --- */
let cliente = new Pessoa("José", "HB20");

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    
    if (carro['modelo'] == cliente.dizerCarroPreferido())
        cliente.comprarCarro(carro);
});

console.log(cliente.dizerCarroQueTem());