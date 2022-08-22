interface PessoaProtocolo <T,U>{
  nome:T,
  sobrenome:T,
  idade:U,
  nomeCompleto():T
}

const Pessoa:PessoaProtocolo<string,number> = {
  nome:'jefferson',
  sobrenome:'Guirra',
  idade:23,
  nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`
  },
}

console.log(Pessoa.nomeCompleto())