import { v4 as uuidv4 } from 'uuid';
// let uuid = uuidv4()
// console.log(uuid)
export {
    Item,
    User,
    Shop
}

class Item {
    private _id : string;
    private _name: string;
    private _price: number;
    private _description: string;

    constructor(name:string, price:number, description: string){
        this._id = uuidv4();
        this._name = name;
        this._price = price;
        this._description = description;
    }
    public get id():string{
        return this._id;
    }
    public get name(): string{
        return this._name;
    }
    public get price():number{
        return this._price;
    }
    public get description():string {
        return this._description;
    }
}

class User {
    private _id: string;
    private _name: string;
    private _age: number;
    private _cart: Item[];

    constructor(name:string,age:number){
        this._id = uuidv4();
        this._name = name;
        this._age = age;
        this._cart = [];
    }
    public get id():string{
        return this._id;
    }
    public get name():string{
        return this._name;
    }
    public get age():number{
        return this._age;
    }
    public get cart():Item[]{
        return this._cart;
    }
    //CART METHOD:
    public addToCart(item:Item){
        this._cart.push(item);
    }
    public removeFromCart(item: Item) {
        this._cart = this._cart.filter((cartItem) => cartItem.id !== item.id);
    }
   
    public removeItemFromCart(item:Item, quantity: number){
            let currentItems = quantity
            this._cart = this.cart.filter(cartItem=>{
                if (cartItem.id === item.id && currentItems) {
                return false;                   
    }
        return true
    })
}
public cartTotal(): number {
    let total = 0
    for (const item of this._cart) {
        total = total + item.price
    }
    return total
}
public printCart(){
    console.log(`These are the items in ${this._name}'s cart: `)
    for (const item of this._cart){
        console.log(`-> ${item.name}: $ ${item.price}`)
    }}
}

class Shop {
        private _items: Item[];

        constructor(){
        this._items = [];
        this.createItem();
    }
    private createItem(){
        const itemA = new Item("Apples", 5.00, "Bag of Apples")
        const itemB = new Item("Brocolli", 3.00, "2 stems of broccoli")
        const itemC = new Item("Chicken Breasts", 12.00, "Organic Chicken Breast")
        this._items.push(itemA,itemB,itemC)
    }
    public get items():Item[]{
        return this._items
    }
}

