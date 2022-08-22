class Calculadora{
  constructor(public number:number){}
  add(n:number){
    this.number += n
    return this 
  }
  sub(n:number){
    this.number -= n
    return this
  }
  div(n:number){
    this.number /=n
    return this
  }
  mul(n:number){
    this.number *=n
    return this
  }
}
class subCalculadora extends Calculadora{
  pow(n:number){
    this.number **=n
    return this
  }
}

const calculadora = new subCalculadora(5)
calculadora.add(5).mul(1).pow(2)
console.log(calculadora)