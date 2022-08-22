type typePessoa = {
  frase: string
  opcao: { [index: string]: number }
}

class Votation implements typePessoa {
  constructor(
    public frase: string,
    public opcao:{[index: string]: number}
  ){}

  getFrase():void{
    console.log(this.frase)
  }

  votar(value:string) : void{
    if (value in this.opcao) this.opcao[value] += 1
  }

  getObj():void{
    console.log(this.opcao)
  }
}

const linguagens = new Votation('Vote na sua linguagem preferida',{JavaScript:0,python:0,Ruby:0})
linguagens.getFrase()
linguagens.getObj()
linguagens.votar('JavaScript')
linguagens.votar('JavaScript')
linguagens.getObj()