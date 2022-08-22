type tipoPessoa = {
  nome: string
  idade: number
}

class Pessoa implements tipoPessoa {
  constructor(public nome: string, public idade: number) {}
}


const perssoa = new Pessoa('jefferson',23)