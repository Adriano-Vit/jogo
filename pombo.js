import { Personagem } from './personagem.js';

export class Pombo extends Personagem{
    #vida;
    constructor(nome, ataque, defesa, vida){
        super(nome, ataque, defesa);
        this.#vida = vida;

    }

    ataqueEspecial(){
        return this.atacar() * 2;
    }

    receberDano(dano){
        this.#vida.perderVida(dano)

        
    }
}