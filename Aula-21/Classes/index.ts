class Empresa {
  public readonly nome: string
  private readonly colaboradores: Colaborador[] = []
  constructor(nome: string) {
    this.nome = nome
  }
  adicionaColaboradores(colaborador:Colaborador){
    this.colaboradores.push(colaborador)
  }
}

class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ) {}
}
const colaborador1 = new Colaborador('Jefferson','Guirra')
const colaborador2 = new Colaborador('Mirela', 'Tamires')

const empresa1 = new Empresa('Jefferson',)
empresa1.adicionaColaboradores(colaborador1)
empresa1.adicionaColaboradores(colaborador2)
console.log(empresa1)
console.log(empresa1.nome)
