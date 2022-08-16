"use strict";
function findPerson(cpf) {
    if (typeof cpf === 'string') {
        console.log(cpf.toLowerCase());
    }
    else {
        console.log(cpf.toFixed());
    }
}
findPerson(1.3);
function getPersonStatus(person) {
    if (person.hungry) {
        console.log('Está com fome');
    }
    else {
        console.log('não esta com fome');
    }
}
const person = {
    sex: 'male',
    hungry: false
};
getPersonStatus(person);
