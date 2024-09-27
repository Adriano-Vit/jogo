export class Personagem{
    #nome;
    #ataque;
    #defesa;
    #nivel;
    #experiencia;

    constructor(nome, ataque, defesa, nivel=1){
        if(this.constructor === Personagem){
            throw new Error("Personagem é uma classe abstrata é não pode ser instanciada. ");
        }

        if(ataque <= 0 || defesa < 0){
            throw new Error ("O ataque deve ser positivo e a defesa não pode ser negativa ")
        }

        this.#nome = nome;
        this.#ataque = ataque;
        this.#defesa = defesa;
        this.#nivel = nivel;
        this.#experiencia = 0;
    }

    get nome(){
        return this.#nome;
    }

    atacar(){
        return this.#ataque;

    }

    defender(danoRecebido){
        const dano = danoRecebido - this.#defesa;
        return dano > 0 ? dano: 0;
        
    }

    ganharExperiencia(exp){
        this.#experiencia += exp;
        if(this.#experiencia >= this.#nivel*10){
            this.subiNivel()
        }
    }

    subiNivel(){
        this.#nivel += 1;
        this.#ataque += 5;
        this.#defesa += 2;
        this.#experiencia +=0

        console.log(`${this.#nome} subiu para o nível ${this.#nivel} !`);

    }

    ataqueEspecial(){
        throw new Error("Método 'ataqueEspecial' deve ser implementado.");
    }
}