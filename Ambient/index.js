"use strict";
class Votation {
    constructor(frase, opcao) {
        this.frase = frase;
        this.opcao = opcao;
    }
    getFrase() {
        console.log(this.frase);
    }
    votar(value) {
        console.log(value in this.opcao);
        if (value in this.opcao)
            this.opcao[value] += 1;
    }
    getObj() {
        console.log(this.opcao);
    }
}
const linguagens = new Votation('Vote na sua linguagem preferida', { JavaScript: 0, python: 0, Ruby: 0 });
linguagens.getFrase();
linguagens.getObj();
linguagens.votar('JavaScript');
linguagens.votar('JavaScript');
linguagens.getObj();
