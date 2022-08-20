class Motor {
  ligar(): void {
    console.log('RPM > 0 carro ligou.')
  }
  acelerar(): void {
    console.log('RPM aumentou carro acelerou.')
  }
  parar(): void {
    console.log('RPM === 0 carrou parou.')
  }
}

class Carro {
  private readonly motor:Motor = new Motor()
  ligar() : void {
    motor.ligar()
  }
  acelerar() : void{
    motor.acelerar()
  }

  parar() : void {
    motor.parar()
  }
}
const motor = new Motor ()
const carro = new Carro()
carro.ligar()
carro.acelerar()
carro.parar()
