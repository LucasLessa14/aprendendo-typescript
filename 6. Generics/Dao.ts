import { DaoInterface } from './DaoInterface'

export class Dao<T> implements DaoInterface<T> {
    nomeTabela: string = ''
    
    public inserir(object: T): boolean {
        console.log("logica insert")
        return true;
    }

    public selecionarTodos(): [T] {
        console.log("logica selecionarTodos")
        return [Object()];
    }

    public selecionar(id: number): T {
        console.log("logica selecionar")
        return Object();
    }

    public atualizar(object: T): boolean {
        console.log("logica atualizar")
        return true;
    }

    public remover(id: number): T {
        console.log("logica remover")
        return Object();
    }
} 