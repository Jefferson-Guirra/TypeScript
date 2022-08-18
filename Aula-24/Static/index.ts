class Pessoa {
  static idadePadrao = 0
  static cpfPadrao = '000.000.000-00'
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    private _cpf: string
  ) {}

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao)
  }
  set cpf(cpf: string) {
    this._cpf = cpf
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '')
  }
}
const pessoa1 = Pessoa.criaPessoa('jefferson', 'guirra')
const pessoa = new Pessoa('jefferson', 'guirra', 23, '07644444505')
pessoa.cpf = '076.444.445-05'
console.log(pessoa1)
console.log(pessoa)

//ATRIBUTOS E METODOS ESTATICOS PODEM SER ACESSADOS DIRETAMENTE NO CONSTRUTOR PRINCIPAL (PESSOA)
