export class Operacao{
    constructor(combatente, pombo){
        if(!combatente || !pombo){
            throw new Error("Tanto combatente quanto o pombo devem estar presente para iniciar a operação. ");
        }
        this.combatente = combatente;
        this.pombo = pombo;
    }

    iniciar(){
        console.log(`Operação comandada por ${this.combatente.nome} para capiturar ${this.pombo.nome}`);

        while(this.combatente.estaVivo() && this.pombo.estaVivo()){
            this.turno(this.combatente, this.pombo);
            if(this.pombo.vida.estaVivo()){
                this.turno(this.pombo, this.combatente);
            }
        }

        if(this.combatente.vida.estaVivo()){
            console.log(`${this.combatente.nome} capiturou o criminoso!`);
            this.combatente.ganhar.Experiencia(20);
        }else {
            console.log(`${this.pombo.nome} fugiu do cerco`);
        }
    }

    turno(atacante , defensor){
        const dano = atacante.atacar();
        const danoFinal  = defensor.defender(dano);
        defensor.receberDano(danoFinal);

        console.log(`${atacante.nome} ataca ${defensor.nome} e causa ${danoFinal} de dano `);
        console.log(`${defensor.nome} tem ${defensor.vida.valorAtual} de vida restante. `);

        if(defensor === this.combatente && defensor.vida.valorAtual < 50){
            defensor.usarBeta30();
        }
    }

    
}