"use strict";
function add(a, b) {
    return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}
console.log(add('2', '3'));
class Aluno {
    constructor(nome) {
        this.nome = nome;
        this.tipo = 'pessoa';
    }
}
function mostrarNome(obj) {
    //if('nome' in obj) console.log(obj.nome) 
    //else console.log(obj.cor)
    // if(obj instanceof Aluno) console.log(obj.nome)
    switch (obj.tipo) {
        case "animal":
            console.log(obj.cor);
            break;
        case "pessoa":
            console.log(obj.nome);
            break;
    }
}
mostrarNome(new Aluno('Jefferson'));
mostrarNome({ tipo: 'animal', cor: 'Azul' });
