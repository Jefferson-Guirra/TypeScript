type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K]

const obj = {
  cor : 'rosa',
  vacinas:['vacina1','vacina2']
}

const obeterChave :ObterChaveFn = (obj,chave) => obj[chave]

const vacinas = obeterChave(obj,'vacinas')
const cor = obeterChave(obj,'cor')
console.log(vacinas,cor)