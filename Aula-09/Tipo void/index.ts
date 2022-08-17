type Person = {
  nome:string,
  sobrenome:string,
  exibirNome():void

}


const person :Person ={
  nome:'jefferson',
  sobrenome:'guirra',
  exibirNome(){
    console.log(this.nome, this.sobrenome)
  }
}

person.exibirNome()