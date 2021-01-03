import Guerreiro from './Guerreiro'
import Mago from './Mago'

let guerreiro_blaster = new Guerreiro(120,35,10,10,5);
let mago_negro_do_caos = new Mago(100,20,5,15,20);

console.log(mago_negro_do_caos.atacar(guerreiro_blaster));
console.log(guerreiro_blaster.atacar(mago_negro_do_caos));

console.log('----------');

console.log(mago_negro_do_caos.reviver());
console.log(guerreiro_blaster.reviver());