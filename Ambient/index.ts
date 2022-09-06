export default class Messaging {
  constructor(msg:string){}
  sendMessage(msg:string){
    console.log('mensagem enviada',msg)
  }
}

export class Product{
  constructor(public name : string, public price : number){}
}

