"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
class ShoppingCart {
    constructor() {
        this._items = [];
        this._orderStatus = 'open';
    }
    addItem(item) {
        if (this._orderStatus == 'open')
            this._items.push(item);
        else
            return;
    }
    removeItem(index) {
        this._items.splice(index, 1);
    }
    get items() {
        return this._items;
    }
    get orderStatus() {
        return this._orderStatus;
    }
    total() {
        return +this.items.reduce((acc, valor) => acc + valor.price, 0).toFixed(2);
    }
    checkout() {
        if (this.isEmpty())
            console.log('seu carrinho está vazio');
        else {
            this._orderStatus = 'closed';
            this.sendMessage(`Seu pedido com total de ${this.total()} está sendo processado.`);
            this.saveOrder();
            this.clear();
        }
    }
    isEmpty() {
        return this._items.length == 0;
    }
    sendMessage(value) {
        console.log(value);
    }
    clear() {
        this._items.length = 0;
        console.log('carrinho de compras foi limpo.');
    }
    saveOrder() {
        console.log('pedido salvo com sucesso...');
    }
}
exports.ShoppingCart = ShoppingCart;
const shoppingCart = new ShoppingCart();
console.log(shoppingCart.orderStatus);
shoppingCart.addItem({ name: 'bolacha', price: 1.5 });
shoppingCart.addItem({ name: 'caderno', price: 15.50 });
shoppingCart.addItem({ name: 'camiseta', price: 49.9 });
console.log(shoppingCart.items);
console.log(shoppingCart.total());
shoppingCart.checkout();
console.log(shoppingCart.items);
console.log(shoppingCart.orderStatus);
