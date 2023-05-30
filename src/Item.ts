import { v4 as uuidv4 } from 'uuid';
export{ Item }

export default class Item {
    private _id: string;
    private _name: string;
    private _price: number;
    private _description: string;

    

    constructor(name: string, price: number, description: string) {
        this._id = uuidv4();
        this._name = name;
        this._price = price;
        this._description = description;

    }
    
    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get price(): number {
        return this._price;
    }

    public set price(value: number) {
        this._price = value;
    }

    public get description(): string {
        return this._description;
    }

    public set description(value: string) {
        this._description = value;
    }
}


////update per hw
// class User{
//     static myUser: User | null = null; 

//     constructor(public name:string, public age: number){}

//     static loginInUser(): User | null {
//         const userNameInput = document.getElementById('userNameInput') as HTMLInputElement;
//         const ageInput = document.getElementById('ageInput') as HTMLInputElement;

//         const name = userNameInput.value.trim();
//         const age = parseInt(ageInput.value.trim(),10);

//         if (name && age) {
//             const user = new User(name,age);
//             User.myUser = user;
//             return user;
//         } else {

//            return null;
//         }
//     }
// }

//////ydays hw
// class User {
//     private _id: string;
//     private _name: string;
//     private _age: number;
//     private _cart: Item[];

//     constructor(name:string,age:number){
//         this._id = uuidv4();
//         this._name = name;
//         this._age = age;
//         this._cart = [];
//     }
//     public get id():string{
//         return this._id;
//     }
//     public get name():string{
//         return this._name;
//     }
//     public get age():number{
//         return this._age;
//     }
//     public get cart():Item[]{
//         return this._cart;
//     }
    //CART METHOD:
    // public addToCart(item:Item){
    //     this._cart.push(item);
    // }
//     public removeFromCart(item: Item) {
//         this._cart = this._cart.filter((cartItem) => cartItem.id !== item.id);
//     }
   
//     public removeItemFromCart(item:Item, quantity: number){
//         let currentItems = quantity
//         this._cart = this.cart.filter(cartItem=>{
//             if (cartItem.id === item.id && currentItems) {
//             return false;                   
//     }
//         return true
//     })
// }
// public cartTotal(): number {
//     let total = 0
//     for (const item of this._cart) {
//         total = total + item.price
//     }
//     return total
// }
// public printCart(){
//     console.log(`These are the items in ${this._name}'s cart: `)
//     for (const item of this._cart){
//         console.log(`-> ${item.name}: $ ${item.price}`)
//     }}
// }
//updated
// interface Item {
//     id:number;
//     name: string;
//     description: string;
//     price: number;

// }
// export default class Shop {
//     private _items: Item[];

//     constructor(){
//         this._items = [];
//         this.showItems();
//     }
//     private showItems(): void {
//         const shopDiv = document.getElementById("shopDiv");

//         for (const item of this._items) {
//             const itemElement = this.itemElement(item);
//             shopDiv.appendChild(itemElement);
//         }
//     }    
    // private itemElement(item:Item): HTMLDivElement {
    //     const itemCard = document.createElement("div");
    //     itemCard.classList.add("item-card");

    //     const itemName = document.createElement("h3");
    //     itemName.textContent = item.name;
    //     itemCard.appendChild(itemName);

    //     const itemDescription = document.createElement("p");
    //     itemDescription.textContent = item.description;
    //     itemCard.appendChild(itemDescription);

    //     const itemPrice = document.createElement("p");
    //     itemPrice.textContent = `Price: $${item.price.toFixed(2)}`;
    //     itemCard.appendChild(itemPrice);

    //     const addToCartButton = document.createElement("button");
    //     addToCartButton.textContent = "Add to Cart";
    //     addToCartButton.addEventListener("click", ()=> {
    //         this.addToCart(item);
    //     });
    //     itemCard.appendChild(addToCartButton);

    //     return itemCard;
    // }
    // private addToCart(item: Item): void{

    // }

    // public showCartTotal(): void {
    //     let totalPrice = 0,
    //         totalItems = 0;
    
    //     cart.forEach((item) => {
    //         totalPrice += item.price * item.numberOfUnits;
    //         totalItems += item.numberOfUnits;
    //     });
    
    //     const subtotalEl = document.getElementById("subtotalElementId");
    //     const totalItemsInCartEl = document.getElementById("totalItemsInCartElementId");
    
    //     if (subtotalEl) {
    //         subtotalEl.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(2)}`;
    //     }
    
    //     if (totalItemsInCartEl) {
    //         totalItemsInCartEl.innerHTML = totalItems.toString();
    //     }
    // }

    // public cartHTMLElement(): string {
    //     let html = ""; 
    //     cartItemsEl.innerHTML = ""; 
    
    //     cart.forEach((item) => {
    //         html += `
    //             <div class="item">
    //                 <div class="item-container">
    //                     <div class="item-img">
    //                         <img src="${item.imgSrc}" alt="${item.name}">
    //                     </div>
    //                     <div class="desc">
    //                         <h2>${item.name}</h2>
    //                         <h2><small>$</small>${item.price}</h2>
    //                         <p>${item.description}</p>
    //                     </div>
    //                     <div class="add-to-cart" onclick="addToCart(${item.id})">
    //                         <img src="./icons/bag-plus.png" alt="add to cart">
    //                     </div>
    //                 </div>
    //             </div>
    //         `;
    //     });
    
    //     return html;
    // }
// viewProducts()
// //Cart Array
// let cart = JSON.parse(localStorage.getItem("CART")) || [];
// updateCart();
// //ADD TO CART
// function addToCart(id) {
//     // check if prodcut already exist in cart
//     if (cart.some((item) => item.id === id)) {
//       changeNumberOfUnits("plus", id);
//     } else {
//       const item = products.find((product) => product.id === id);
  
//       cart.push({
//         ...item,
//         numberOfUnits: 1,
//       });
//     }
  
//     updateCart();
//   }

// let itemsIncart = []
// const parentElement = document.querySelector("#buyItem")
// const cartTotal = document.querySelector("#cartTotal")
// const products = document.querySelector('.product')

// viewProducts.forEach(product => {
//     product.addEventListener('click')
//

    // public removeFromCart(item: Item) {
    //     this._cart = this._cart.filter((cartItem) => cartItem.id !== item.id);
    //   }
    
    // public removeItemFromCart(item: Item, quantity: number) {
    //     let currentItems = quantity;
    //     this._cart = this._cart.filter((cartItem) => {
    //       if (cartItem.id === item.id && currentItems > 0) {
    //         currentItems--;
    //         return false;
    //       }
    //       return true;
    //     });
    //}}
    
    // public cartTotal(): number {
    //     let total = 0;
    //     for (const item of this._cart) {
    //       total = total + item.price;
    //     }
    //     return total;
    //   }
    
    // public printCart() {
    //     console.log(`These are the items in the cart:`);
    //     for (const item of this._cart) {
    //       console.log(`-> ${item.name}: $${item.price}`);
    //     }
    //   }
    


//     private updateCart():void {
//         const cartDiv = document.getElementById("cartDiv");

//         cartDiv.innerHTML = "";

//         if(this.cart.length === 0){

//             const emptyCartMessage = document.createElement("p");
//             emptyCartMessage.textContent = "Cart is Empty";
//             cartDiv.appendChild(emptyCartMessage);
//         } else {
//             for (const item of this.cart){
//                 const cartItemELement = this.cartHTMLElement(item);
//                 cartDiv.appendChild(cartItemELement);
//             }
//             this.addRemoveEventListener();
//         }
//     }
//     public addToCart(id:number):void {
//         if(this.cart.some((item) => item.id === id)) {
//             this.changeNumberOfUnits("plus", id);
//         }else{
//             const item = products.find((product)=> product.id === id);

//             if (item) {
//                 const newItem: cartItem = {
//                     ...item,
//                     numberOfUnits:1,
//                 };

//                 this.cart.push(newItem);
//             }
//         }
//         this.updateCart();
//         }

//         function removeItemFromCart(id: number): void {
//             cart = cart.filter((item) => item.id !== id);
          
//             updateCart();
//         }

//         private changeNumberOfUnits(action: string, id:number):void {
//             const CartItem = this.cart.find((item)=> item.id === id);

//             if (CartItem){
//                 if (action === "plus"){
//                     CartItem.numberOfUnits++;           
//                 }
//                 else if (action === "minus"){
//                     if (CartItem.numberOfUnits > 1){
//                         CartItem.numberOfUnits--;
//                     }else{
//                         this.cart = this.cart.filter((item)=> item.id != id);
//                     }
//                 }
//             }
//             this.updateCart();
//         }
//   }
//MAYBE ILL ADD LATER////////////////////
//   private cartHTMLElement(item: CartItem): HTMLDivElement {
//     const cartItemElement = document.createElement("div");

//     return cartItemElement
//   }
//   private addRemoveEventElement():void {
// //add event listener to remoce buttons & handle remove buttn logic
//   }
