const coresObj= {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue'
}
type CoresObj = typeof coresObj
type CoresChaves = keyof CoresObj

function traduzirCor(
  cor: CoresChaves,
  cores: CoresObj
): string {
  return cores[cor]
}

console.log(traduzirCor('azul',coresObj))


type jogosObj = typeof jogos
type jogosChaves = keyof jogosObj

const jogos = {
  finalFantasy: 1998,
  streetFight: 1995,
  bombaPatch: 2002
}

function getJogos(jogo: jogosChaves, obj: jogosObj): number {
  return obj[jogo]
}

console.log(getJogos('bombaPatch', jogos))