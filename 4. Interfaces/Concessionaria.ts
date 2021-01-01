import { ConcessionariaInterface } from "./ConcessionariaInterface";

export default class Concessionaria implements ConcessionariaInterface {
    private endereco: string

    constructor(endereco: string) {
        this.endereco = endereco;
    }

    public fornecerHorariosDeFuncionamento(): string {
        return "De segunda a sexta de 8h as 18h"
    }

    public fornecerEndereco(): string {
        return this.endereco;
    }
};