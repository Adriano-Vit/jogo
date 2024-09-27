import { Personagem } from './personagem.js';

export class Combatente extends Personagem{
    #vida;
    #beta30;

    constructor(nome, ataque, defesa, vida){
        super(nome, ataque, defesa);
        this.#vida = vida;
        this.#beta30 = {pocao:2};

    }

    ataqueEspecial(){
        return this.atacar() * 3
    }

    receberDano(dano){
        this.#vida.perderVida(dano)
    }

    usarBeta30(){
        if(this.#beta30.pocao <= 0){
            throw new Error(`${this.nome} não tem mais porções!`);
        }

        this.#beta30.pocao -= 1;
        this.#vida.restaurarVida(25);
        console.log(`${this.nome} usou uma porção e restaurou 25 pontos de vida!`);
    }
}