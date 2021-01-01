class Carro {
    private modelo: string;
    private numeroDePortas: number;
    private velocidade: number = 0;

    constructor(modelo: string, numeroDePortas: number) {
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }

    public acelerar(): void {
        this.velocidade = this.velocidade + 10;
    }

    public parar(): void {
        this.velocidade = 0;
    }

    public velocidadeAtual(): number {
        return this.velocidade;
    }
}

class Concessionaria {
    private endereco: string
    private listaDeCarros: Array<Carro>

    constructor(endereco: string, listaDeCarros: Array<Carro>) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }

    public fornecerEndereco(): string {
        return this.endereco;
    }

    public mostrarListaDeCarros(): Array<Carro> {
        return this.listaDeCarros;
    }
};

class Pessoa {
    private nome: string;
    private carroPreferido: string;
    private carro: Carro;

    constructor(nome: string, carroPreferido: string) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }

    public dizerNome(): string {
        return this.nome;
    }

    public dizerCarroPreferido(): string {
        return this.carroPreferido;
    }

    public comprarCarro(carro: Carro): void {
        this.carro = carro;
    }

    public dizerCarroQueTem(): Carro {
        return this.carro;
    }
}

let ola = (texto: string) => {
    console.log(texto)
}

ola("Hello World");

/* --- criar carros --- */
let carroA = new Carro('HB20', 4);
let carroB = new Carro('Celta', 4);
let carroC = new Carro('Palio', 2);

/* --- criar concessionaria --- */
let listaDeCarros: Array<Carro> = [carroA, carroB, carroC]
let concessionaria = new Concessionaria("Av. Gomes de Matos", listaDeCarros);

/* --- criar pessoas --- */
let cliente = new Pessoa("José", "Celta");

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    
    if (carro['modelo'] == cliente.dizerCarroPreferido())
        cliente.comprarCarro(carro);
});

console.log(cliente.dizerCarroQueTem());