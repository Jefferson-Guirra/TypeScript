abstract class Ferramenta{
  constructor(protected nome:string){}
  getNome () : string{
    return this.nome
  }
  abstract escrever() : void
}

class Escritor {
  constructor(private nome: string, private _ferramenta?: Ferramenta) {}
  getNome() : string{
    return this.nome
  }
  set Ferramenta (ferramenta:Ferramenta){
    this._ferramenta = ferramenta
  }
  escrever() : void{
    if(this._ferramenta=== undefined)  console.log('não posso escrever sem ferramenta')
    else console.log(`Escreveu com ${this._ferramenta?.getNome()}`)
  }
}

class Caneta extends Ferramenta{
  escrever(): void {
    console.log(`Escreveu com ${this.nome}`)
  }
}
class Lápis extends Ferramenta {
  escrever(): void {
    console.log(`Escreveu com ${this.nome}`)
  }
}
const caneta = new Caneta('Caneta')
const lápis = new Lápis ('Lápis')
const escritor = new Escritor('jefferson')
escritor.escrever()
escritor.Ferramenta = lápis
escritor.escrever()


