"use strict";
class Empresa {
    constructor(nome) {
        this.colaboradores = [];
        this.nome = nome;
    }
    adicionaColaboradores(colaborador) {
        this.colaboradores.push(colaborador);
    }
}
class Colaborador {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
const colaborador1 = new Colaborador('Jefferson', 'Guirra');
const colaborador2 = new Colaborador('Mirela', 'Tamires');
const empresa1 = new Empresa('Jefferson');
empresa1.adicionaColaboradores(colaborador1);
empresa1.adicionaColaboradores(colaborador2);
console.log(empresa1);
console.log(empresa1.nome);
