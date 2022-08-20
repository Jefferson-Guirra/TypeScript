type tipoPessoa = {
  nome: string
  sobrenome: string
  nomeCompleto():string
}

class Pessoa implements tipoPessoa {
  constructor(public nome: string,public sobrenome:string) {}
  nomeCompleto(): string {
      return this.nome + ' ' + this.sobrenome
  }

}

const pessoa = new Pessoa('jefferson','guirra')
console.log(pessoa.nomeCompleto())


