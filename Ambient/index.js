"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UmaPessoa = void 0;
function decorator(classPrototype, nome) {
    let valorPropriedade;
    return {
        get: () => valorPropriedade,
        set: (valor) => valorPropriedade = valor.split('').reverse().join('')
    };
}
class UmaPessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    msg() {
        return `${this.nome} ${this.sobrenome}`;
    }
}
__decorate([
    decorator,
    __metadata("design:type", String)
], UmaPessoa.prototype, "nome", void 0);
exports.UmaPessoa = UmaPessoa;
const pessoa = new UmaPessoa('jefferson', 'guirra');
console.log(pessoa.msg());
