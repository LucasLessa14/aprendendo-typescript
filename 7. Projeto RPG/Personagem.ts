export default class Personagem {
    protected hp: number;
    protected attack: number;
    protected defense: number;
    protected critical: number;
    protected escape: number;

    constructor(hp: number, attack: number, defense: number, critical: number, escape: number) {
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.critical = critical;
        this.escape = escape;
    }

    public atacar(personagem: Personagem): void {
        let dano = personagem.attack - this.defense;
        
        if (dano > 0) {
            console.log(`Vida antes do ataque: HP ${this.hp}`);
            this.hp = this.hp - dano;
            console.log(`Vida após o ataque: HP ${this.hp}`);
        } else {
            console.log(`Ataque Defendido: HP ${this.hp}`);
        }
    }
    
    public reviver(): void {
        console.log(this.hp);
        this.hp = this.hp * 1.3;
        console.log(this.hp);
    }
}