import { DaoInterface } from './DaoInterface';
import Concessionaria from './Concessionaria';

export class ConcessionariaDao implements DaoInterface {

    nomeTabela: string = 'tb_concessionaria'
    
    public inserir(object: Concessionaria): boolean {
        console.log("logica insert")
        return true;
    }

    public selecionarTodos(): [Concessionaria] {
        console.log("logica insert")
        return [new Concessionaria('')];
    }

    public selecionar(id: number): Concessionaria {
        console.log("logica insert")
        return new Concessionaria('');
    }

    public atualizar(object: Concessionaria): boolean {
        console.log("logica insert")
        return true;
    }

    public remover(id: number): Concessionaria {
        console.log("logica insert")
        return new Concessionaria('');
    }
}