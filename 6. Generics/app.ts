import Concessionaria from './Concessionaria'
import Pessoa from './Pessoa'
import { Dao } from './Dao';

let concessionaria = new Concessionaria('Av. Paulista');
let pessoa = new Pessoa('José', 'Palio');

let dao1: Dao<Concessionaria> = new Dao<Concessionaria>();
let dao2: Dao<Pessoa> = new Dao<Pessoa>();

dao1.atualizar(concessionaria);
dao2.inserir(pessoa);