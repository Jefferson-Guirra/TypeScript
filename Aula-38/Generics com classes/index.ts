export class Pilha <T>{
  private contador = 0
  private elementos : {[key:number]:T} = {}

  push(elemento:T){
    this.elementos[this.contador] = elemento
    this.contador++
  }

  isEmpty() : boolean{
    return this.contador === 0
  }

  pop() : T | void{
    if(this.isEmpty())return undefined
    else{
      const elemento = this.elementos[this.contador]
      delete this.elementos[this.contador]
      this.contador--
      return elemento
    }
  }

  length() : number{
    return this.contador
  }

  view():void{
    for(const chave in this.elementos){
      console.log(this.elementos[chave])
    }
  }
}

const pilha = new Pilha<number>()
pilha.push(1)
pilha.push(2)
pilha.push(3)
pilha.push(4)
