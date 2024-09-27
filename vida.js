export class Vida{
    #valorMaximo;
    #valorAtual;

    constructor(valorMaximo){
        if(valorMaximo <= 0){
            throw new Error("A vida máxima tem que ser maior que 0. ");

        }
        this.#valorMaximo = valorMaximo;
        this.#valorAtual = valorMaximo;
    }

    perderVida(dano){
        if(dano < 0){
            throw new Error("O dano não pode ser negativo")
            
            this.#valorAtual -= dano;
            if(this.#valorAtual < 0){
                this.#valorAtual = 0;
            }
        }
    }
            

    restaurarVida(valor){
         if(valor < 0){
         throw new Error("O valor de restauração não pode ser negativo. ");

        }
        this.#valorAtual += valor;

        if(this.#valorAtual > this.#valorMaximo){
            this.#valorAtual = this.#valorMaximo;
        }

    }

    estaVivo(){
        return this.#valorAtual > 0;
    }

    get valorAtual(){
        return this.#valorAtual;
    }

    
}