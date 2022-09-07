export default class Messaging {
  constructor(msg:string){}
  sendMessage(msg:string){
    console.log('mensagem enviada',msg)
  }
}

export class Product{
  constructor(public name : string, public price : number){}
}



export abstract class Discount{
  protected discount = 0
  calculate(price:number):number{
    return price - price*this.discount
  }
}

export class FifityPercentDiscount extends Discount{
  protected readonly discount: number = 0.5
}
export class TenPercentDiscount extends Discount{
  protected readonly discount = 0.1
}
export class NoDiscount extends Discount{}