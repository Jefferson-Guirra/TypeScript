"use strict";
const person = {
    nome: 'jefferson',
    sobrenome: 'guirra',
    exibirNome() {
        console.log(this.nome, this.sobrenome);
    }
};
console.log(person.exibirNome());
