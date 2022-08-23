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
exports.Animal = void 0;
let Animal = class Animal {
    constructor(cor, nome) {
        this.cor = cor;
        this.nome = nome;
    }
};
Animal = __decorate([
    decorator,
    __metadata("design:paramtypes", [String, String])
], Animal);
exports.Animal = Animal;
function decorator(value) {
    return class extends value {
        constructor(...args) {
            super(...args);
            this.cor = this.inverte(args[0]);
            this.nome = this.inverte(args[1]);
        }
        inverte(valor) {
            return valor.split('').reverse().join('');
        }
    };
}
//const animalDecorator = Decorator(Animal)
const animal = new Animal('azul', 'Gato');
console.log(animal.cor);
console.log(animal.nome);
