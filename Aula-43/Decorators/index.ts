@decorator
export class Animal{
  constructor (public cor : string, public nome:string){}
}

function decorator <T extends new (...args:any[])=>any>(value:T) : T{
  
  return class extends value {
    cor: string
    nome: string
    constructor(...args: any[]) {
      super(...args)
      this.cor = this.inverte(args[0])
      this.nome = this.inverte(args[1])
    }
    inverte(valor:string): string{
      return valor.split('').reverse().join('')
    }
  }
}

//const animalDecorator = Decorator(Animal)
const animal = new Animal ('azul','Gato')
console.log(animal.cor)
console.log(animal.nome)
