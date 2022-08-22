function add (a:unknown,b:unknown) : string | number {
  return typeof a === 'number' && typeof b === 'number' ?  a + b : `${a}${b}`
 
  
  
}
console.log(add('2','3'))

type Pessoa = { tipo:'pessoa', nome: string}
type Animal = { tipo:'animal', cor: string }

type PessoaouAnimal = Pessoa | Animal

class Aluno implements Pessoa{
  tipo: "pessoa" = 'pessoa'
  constructor(public nome:string){}
}

function mostrarNome (obj:PessoaouAnimal) : void{
  //if('nome' in obj) console.log(obj.nome) 
  //else console.log(obj.cor)
  // if(obj instanceof Aluno) console.log(obj.nome)
  switch (obj.tipo){
    case "animal":
      console.log(obj.cor)
      break
    case "pessoa":
      console.log(obj.nome)
      break
  }
}

mostrarNome(new Aluno('Jefferson'))
mostrarNome({tipo:'animal',cor:'Azul'})