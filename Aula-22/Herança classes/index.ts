class Pessoa{
  nome:string
  sobrenome:string
  private idade:number
  constructor(nome:string,idade:number,sobrenome:string){
    this.idade = idade
    this.nome = nome
    this.sobrenome = sobrenome
  }
  getIdade():number{
    return this.idade
  }
  getNomeCompleto():string{
    return `${this.nome} ${this.sobrenome}`
  }

}

class Aluno extends Pessoa{
  getNomeCompleto(): string {
      return `Isso vem do Aluno: ${this.nome} ${this.sobrenome}`
  }
}

class Cliente extends Pessoa{
  getNomeCompleto(): string {
      return `issso vem do Cliente: ${this.nome} ${this.sobrenome}`
  }
}
const aluno = new Aluno('jefferson',23,'guirra')
const cliente = new Cliente ('jefferson',23,'guirra')
const pessoa = new Pessoa('jefferson',23,'guirra')
console.log(pessoa.getNomeCompleto())
console.log(aluno.getNomeCompleto())
console.log(cliente.getNomeCompleto())