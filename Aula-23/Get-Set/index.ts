class Pessoa {
  nome: string
  sobrenome: string
  private idade: number
  private _cpf:string
  constructor(nome: string, idade: number, sobrenome: string,cpf:string) {
    this.idade = idade
    this.nome = nome
    this.sobrenome = sobrenome
    this._cpf = cpf

  }
  getIdade(): number {
    return this.idade
  }
  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`
  }
  set cpf(cpf:string){
    this._cpf = cpf
  }
  get cpf() : string{
    return this._cpf.replace(/\D/g,'')
  }
}
const pessoa = new Pessoa('jefferson',23,'guirra','076.444.445-05')
pessoa.cpf = '076.444.445-05'
console.log(pessoa.cpf)
