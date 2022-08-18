"use strict";
class Pessoa {
    constructor(nome, sobrenome, idade, _cpf) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this._cpf = _cpf;
    }
    static criaPessoa(nome, sobrenome) {
        return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
    }
    set cpf(cpf) {
        this._cpf = cpf;
    }
    get cpf() {
        return this._cpf.replace(/\D/g, '');
    }
}
Pessoa.idadePadrao = 0;
Pessoa.cpfPadrao = '000.000.000-00';
const pessoa1 = Pessoa.criaPessoa('jefferson', 'guirra');
const pessoa = new Pessoa('jefferson', 'guirra', 23, '07644444505');
pessoa.cpf = '076.444.445-05';
console.log(pessoa1);
console.log(pessoa);
//ATRIBUTOS E METODOS ESTATICOS PODEM SER ACESSADOS DIRETAMENTE NO CONSTRUTOR PRINCIPAL (PESSOA)
