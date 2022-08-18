"use strict";
function setCorPreferida(pessoa, cor) {
    return Object.assign(Object.assign({}, pessoa), { cor });
}
console.log(setCorPreferida({
    age: 23,
    name: 'JEFFERSON'
}, 'Azul'));
