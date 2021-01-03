import Personagem from './Personagem';

export default class Guerreiro extends Personagem {

    constructor(hp: number, attack: number, defense: number, critical: number, escape: number) {
        super(hp, attack, defense, critical, escape);
    }
}