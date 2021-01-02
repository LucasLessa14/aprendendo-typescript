export interface DaoInterface<T> {
    nomeTabela: string

    selecionarTodos(): [any]
    selecionar(id: number): any
    atualizar(object: any): boolean
    inserir(object: any): boolean
    remover(id: number): any
}