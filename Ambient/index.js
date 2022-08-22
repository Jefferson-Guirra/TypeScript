"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
//Record cria uma chave para o tipo
const objeto1 = {
    name: 'jefferson',
    sobrenome: 'guirra',
    idade: 23
};
const obj2 = {
    idade: 23,
    nome: 'jefferson',
    sobrenome: 'idade'
};
const obj3 = {};
const accountMongo = {
    _id: 'ldkcjlkpfçlel',
    age: 23,
    name: 'jefferson'
};
function mapAccount(AccountMongo) {
    const { _id } = AccountMongo, AccountData = __rest(AccountMongo, ["_id"]);
    return Object.assign(Object.assign({}, AccountData), { id: _id });
}
console.log(mapAccount(accountMongo));
