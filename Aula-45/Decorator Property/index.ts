function decorator (classPrototype: any, nome: string | symbol): any{
  let valorPropriedade: any
  return {
    get:()=> valorPropriedade,
    set: (valor:any)=> valorPropriedade = valor.split('').reverse().join('')
  }
}

export class UmaPessoa{
  @decorator
  nome: string
  sobrenome:string
  constructor(nome:string,sobrenome:string){
    this.nome = nome
    this.sobrenome = sobrenome
  }
  msg(){
    return `${this.nome} ${this.sobrenome}`
  }
}

const pessoa = new UmaPessoa('jefferson','guirra')
console.log(pessoa.msg())

