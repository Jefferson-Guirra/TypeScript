"use strict";
class Motor {
    ligar() {
        console.log('RPM > 0 carro ligou.');
    }
    acelerar() {
        console.log('RPM aumentou carro acelerou.');
    }
    parar() {
        console.log('RPM === 0 carrou parou.');
    }
}
class Carro {
    constructor() {
        this.motor = new Motor();
    }
    ligar() {
        motor.ligar();
    }
    acelerar() {
        motor.acelerar();
    }
    parar() {
        motor.parar();
    }
}
const motor = new Motor();
const carro = new Carro();
carro.ligar();
carro.acelerar();
carro.parar();
