"use strict";
class Personagem {
    constructor(nome, ataque, vida) {
        this.nome = nome;
        this.ataque = ataque;
        this.vida = vida;
    }
    perderVida(ataque) {
        this.vida -= ataque;
        console.log(`${this.nome} agora tem ${this.vida} pontos de vida.`);
    }
    atacar(person) {
        this.bordao();
        person.perderVida(this.ataque);
    }
}
class Arqueiro extends Personagem {
    bordao() {
        console.log('Por Baldur derrotarei todos os Orcs, AAAAAAAAAAAA');
    }
}
class Orc extends Personagem {
    bordao() {
        console.log('Um pequeno verme, matarei lentamente.....');
    }
}
const arqueiro = new Arqueiro('Arqueiro', 100, 1000);
const orc = new Orc('Orc', 90, 1000);
arqueiro.atacar(orc);
arqueiro.atacar(orc);
arqueiro.atacar(orc);
