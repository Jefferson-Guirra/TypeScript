export abstract class Ferramenta {
  constructor(protected nome:string){}
  getnome (){
    return this.nome
  }
  abstract escrever () : string
}

export default class Escritor  {
  constructor(public nome:string , private _ferramenta?:Ferramenta){}

  set Ferramenta ( value:Ferramenta){
    this._ferramenta =  value
  }
  escrever(){
    if(this._ferramenta === undefined) return 'não tem ferramenta'
    else return `O escritor escreveu com ${this._ferramenta.getnome()}`
  }
}

/*class caneta extends Ferramenta{
  escrever(): void {
      console.log('caneta escreveu')
  }
}

const escritor = new Escritor('jefferson')
const lapis = new caneta ('caneta')*/