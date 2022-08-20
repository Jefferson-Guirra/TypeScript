"use strict";
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }
}
const pessoa = new Pessoa('jefferson', 'guirra');
console.log(pessoa.nomeCompleto());
