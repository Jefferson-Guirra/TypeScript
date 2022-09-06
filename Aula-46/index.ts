type Item = { name: string; price: number }
type OrderStatus = 'open' | 'closed'
export class ShoppingCart {
  private readonly _items: Item[] = []
  private _orderStatus: OrderStatus  ='open'
  
  addItem(item:Item) : void {
    if(this._orderStatus == 'open') this._items.push(item)
    else return
  }
  removeItem(index:number) : void {
    this._items.splice(index, 1)
  }

  get items(): Readonly<Item[]>{
    return this._items
  }

  get orderStatus() : OrderStatus{
    return this._orderStatus
  }

  total() : number{
    return +this.items.reduce((acc,valor)=> acc + valor.price,0).toFixed(2)
  }

  checkout() : void{
    if (this.isEmpty()) console.log('seu carrinho está vazio')
    else {
      this._orderStatus = 'closed'
      this.sendMessage(`Seu pedido com total de ${this.total()} está sendo processado.`)
      this.saveOrder()
      this.clear()
  }

  }
  isEmpty() : boolean{
    return this._items.length == 0
  }

  sendMessage(value:string) :void {
    console.log(value)
  }
  clear() : void{
    this._items.length = 0
    console.log('carrinho de compras foi limpo.')
  }
  saveOrder() : void{
    console.log('pedido salvo com sucesso...')
  }
}

const shoppingCart = new ShoppingCart()
console.log(shoppingCart.orderStatus)
shoppingCart.addItem({ name: 'bolacha', price: 1.5 })
shoppingCart.addItem({ name: 'caderno', price: 15.50 })
shoppingCart.addItem({ name: 'camiseta', price: 49.9 })
console.log(shoppingCart.items)
console.log(shoppingCart.total())
shoppingCart.checkout()
console.log(shoppingCart.items)
console.log(shoppingCart.orderStatus)




