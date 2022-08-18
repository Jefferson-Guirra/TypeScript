type TemNome ={
  nome:string
}

type TemSobrenome ={
  sobrenome : string
}

type TemIdade ={
  idade:number
}

type Pessoa= TemIdade & TemNome & TemSobrenome

const pessoa : Pessoa = {
  idade:23,
  nome:'Jefferson',
  sobrenome:'Guirra'
}
