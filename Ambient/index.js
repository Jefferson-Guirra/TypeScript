"use strict";
class Pessoa {
    constructor(nome, idade, sobrenome, cpf) {
        this.idade = idade;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this._cpf = cpf;
    }
    getIdade() {
        return this.idade;
    }
    getNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
    set cpf(cpf) {
        this._cpf = cpf;
    }
    get cpf() {
        return this._cpf.replace(/\D/g, '');
    }
}
const pessoa = new Pessoa('jefferson', 23, 'guirra', '076.444.445-05');
pessoa.cpf = '076.444.445-05';
console.log(pessoa.cpf);
