import { Combatente } from './combatente.js';
import { Pombo } from './pombo.js';
import {Vida} from './vida.js';
import { Operacao } from './operacao.js';


try{
    const vidaCombatente = new Vida(100);
    const combatente = new Combatente("Magneto", 20, 5, vidaCombatente);


    const vidaPombo = new Vida(100);
    const pombo = new Pombo("Boca Nua", 15, 3, vidaPombo);

    const operacao = new Operacao( combatente, pombo);

    operacao.iniciar();
}catch(erro){
    console.error(`Erro na configuração da operação: ${erro.message}`)
}





