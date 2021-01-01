export default class Concessionaria {
    private endereco: string

    constructor(endereco: string) {
        this.endereco = endereco;
    }

    public fornecerEndereco(): string {
        return this.endereco;
    }
};