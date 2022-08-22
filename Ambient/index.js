"use strict";
function isNumber(a) {
    return typeof a === 'number';
}
console.log(isNumber('12'));
console.log(isNumber(12));
function Soma(...args) {
    const retorno = args.reduce((acc, vl) => {
        if (isNumber(acc) && isNumber(vl)) {
            const soma = acc + vl;
            return soma;
        }
        else
            return acc;
    }, 0);
    return retorno;
}
console.log(Soma(1, 2, 4));
console.log(Soma(...[1, 2, 3, 'a', 'b', 'c', 1]));
