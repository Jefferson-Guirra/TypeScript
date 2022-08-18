type CorRgb = 'Vermelho' | 'Verde' | 'Azul'
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto'
type CorPreferida = CorCMYK | CorRgb

type Pessoa = {
  name:string,
  age:number,
  cor ? : string
}

function setCorPreferida(pessoa:Pessoa,cor:CorPreferida):Pessoa{
  return {...pessoa,cor}
}

console.log(setCorPreferida({
  age:23,
  name:'JEFFERSON'
},'Azul'
))