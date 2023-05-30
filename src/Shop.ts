import Item from './Item';
//import {products} from './Products'

export default class Shop {
    products: Item[];
  
    constructor() {
      this.products = [];
    }
  
    renderProducts(productsEl: Element): void {
      this.products.forEach((product) => {
        productsEl.innerHTML += `
          <div class="item">
            <div class="item-container">
              <div class="item-img">
                <img src="${product}" alt="${product.name}">
              </div>
              <div class="desc">
                <h2>${product.name}</h2>
                <h2><small>$</small>${product.price}</h2>
                <p>${product.description}</p>
              </div>
              <div class="add-to-wishlist">
                <img src="./icons/heart.png" alt="add to wish list">
              </div>
              <div class="add-to-cart" onclick="addToCart(${product.id})">
                <img src="./icons/bag-plus.png" alt="add to cart">
              </div>
            </div>
          </div>
        `;
      });
    }
  }

//////////////////////////////////////////////////////////////////////////
// export default class Shop {
//     private cart: Item[] = [];
//     private _items: Item[];

//         constructor(){
//         this._items = [];
//         this.createItem();
//     }
//     private createItem(){
//         const itemA = new Item("Apples", 5.00, "Bag of Apples")
//         const itemB = new Item("Brocolli", 3.00, "2 stems of broccoli")
//         const itemC = new Item("Chicken Breasts", 12.00, "Organic Chicken Breast")
//         this._items.push(itemA,itemB,itemC)
//     }
//     public get items():Item[]{
//         return this._items
//     }

//     public itemElement(item: Item): HTMLDivElement {
//         const itemCard = document.createElement("div");
//         itemCard.classList.add("item-card");

//         const itemName = document.createElement("h3");
//         itemName.textContent = item.name;
//         itemCard.appendChild(itemName);

//         const itemDescription = document.createElement("p");
//         itemDescription.textContent = item.description;
//         itemCard.appendChild(itemDescription);

//         const itemPrice = document.createElement("p");
//         itemPrice.textContent = `Price: $${item.price.toFixed(2)}`;
//         itemCard.appendChild(itemPrice);

//         const addToCartButton = document.createElement("button");
//         addToCartButton.textContent = "Add to Cart";
//         addToCartButton.addEventListener("click", () => {
//             this.addToCart(item);
//         });
//         itemCard.appendChild(addToCartButton);

//         return itemCard;
//     }

//     private addToCart(item: Item): void {
//         this.cart.push(item);
//         this.showCartTotal();
//     }

//     public showCartTotal(): void {
//         let totalPrice = 0;
//         let totalItems = 0;

//         this.cart.forEach((item) => {
//             totalPrice += item.price;
//             totalItems++;
//         });

//         const subtotalEl = document.getElementById("subtotalElementId");
//         const totalItemsInCartEl = document.getElementById("totalItemsInCartElementId");

//         if (subtotalEl) {
//             subtotalEl.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(2)}`;
//         }

//         if (totalItemsInCartEl) {
//             totalItemsInCartEl.innerHTML = totalItems.toString();
//         }
//     }

//     public cartHTMLElement(): string {
//         let html = "";

//         this.cart.forEach((item) => {
//             html += `
//                 <div class="item">
//                     <div class="item-container">
//                         <div class="item-img">
//                             <img src="${item}" alt="${item.name}">
//                         </div>
//                         <div class="desc">
//                             <h2>${item.name}</h2>
//                             <h2><small>$</small>${item.price}</h2>
//                             <p>${item.description}</p>
//                         </div>
//                         <div class="add-to-cart" onclick="addToCart(${item.id})">
//                             <img src="./icons/bag-plus.png" alt="add to cart">
//                         </div>
//                     </div>
//                 </div>
//             `;
//         });


//     return html;
// }
// }






////////////////////////////FIXED BELOW BLOCK///////////////
// import Item from './Item'

// interface Item {
//     id:number;
//     name: string;
//     description: string;
//     price: number;

// }

// const productsEl = document.querySelector(".items");
// const cartItemsEl = document.querySelector(".cart-items");
// const subtotalEl = document.querySelector(".subtotal");
// const totalItemsInCartEl = document.querySelector(".total-items-in-cart");

// export default class Shop {
//     private _items: Item[];

//     constructor(){
//     this._items = [];
//     this.createItem();
// }
// private createItem(){
//     const itemA = new Item("Apples", 5.00, "Bag of Apples")
//     const itemB = new Item("Brocolli", 3.00, "2 stems of broccoli")
//     const itemC = new Item("Chicken Breasts", 12.00, "Organic Chicken Breast")
//     this._items.push(itemA,itemB,itemC)
// }
// public get items():Item[]{
//     return this._items
// }
// public set items( value:Item[]){
//     this._items = value
// }

// }
// interface Product{
//     id:number;
//   }
//   interface CartItem {
//     id: number;
//     name: string;
//     description: string;
//     price: number;
//     numberOfUnits: number;
//   }
  
//   class ShoppingCart {
//     private _cart: CartItem[];
  
//     constructor(){
//       this._cart = []
//     }

//     private updateCart():void {
//         const cartDiv = document.getElementById("cartDiv");

//         cartDiv.innerHTML = "";

//         if(this._cart.length === 0){

//             const emptyCartMessage = document.createElement("p");
//             emptyCartMessage.textContent = "Cart is Empty";
//             cartDiv.appendChild(emptyCartMessage);
//         } else {
//             for (const item of this._cart){
//                 const cartItemELement = this.cartHTMLElement(item);
//                 cartDiv.appendChild(cartItemELement);
//             }
//             this.addRemoveEventListener();
//         }
//     }
//     public addToCart(id:number):void {
//         if(this._cart.some((item) => item.id === id)) {
//             this.changeNumberOfUnits("plus", id);
//         }else{
//             const item = products.find((product)=> product.id === id);

//             if (item) {
//                 const newItem: CartItem = {
//                     ...item,
//                     numberOfUnits:1,
//                 };

//                 this._cart.push(newItem);
//             }
//         }
//         this.updateCart();
//         }
        

//         public removeItemFromCart(id: number): void {
//             this._cart = this._cart.filter((item) => item.id !== id);
          
            
//         }

//         private changeNumberOfUnits(action: string, id:number):void {
//             const CartItem = this._cart.find((item)=> item.id === id);

//             if (CartItem){
//                 if (action === "plus"){
//                     CartItem.numberOfUnits++;           
//                 }
//                 else if (action === "minus"){
//                     if (CartItem.numberOfUnits > 1){
//                         CartItem.numberOfUnits--;
//                     }else{
//                         this._cart = this._cart.filter((item)=> item.id != id);
//                     }
//                 }
//             }
//             this.updateCart();
//         }
//   }

//   private itemElement(item:Item): HTMLDivElement {
//     const itemCard = document.createElement("div");
//     itemCard.classList.add("item-card");

//     const itemName = document.createElement("h3");
//     itemName.textContent = Item.name;
//     itemCard.appendChild(itemName);

//     const itemDescription = document.createElement("p");
//     itemDescription.textContent = Item.description;
//     itemCard.appendChild(itemDescription);

//     const itemPrice = document.createElement("p");
//     itemPrice.textContent = `Price: $${Item.price.toFixed(2)}`;
//     itemCard.appendChild(itemPrice);

//     const addToCartButton = document.createElement("button");
//     addToCartButton.textContent = "Add to Cart";
//     addToCartButton.addEventListener("click", ()=> {
//         this.addToCart(Item);
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


//FIXED ABOVE/////////////////////////////////////////////
// const shop = new Shop()
// //const user = new User()
// //const item = new Item()

// const user = new User ('Sebastian', 21)

// const itemA = shop.items[0]
// const itemB = shop.items[1]
// const itemC = shop.items[2]

// user.addToCart(itemA)
// user.addToCart(itemB)
// user.addToCart(itemC)

// user.printCart()

// user.removeFromCart(itemA)

// const quantityToRemoveFromCart = 1
// user.removeItemFromCart(itemB, quantityToRemoveFromCart)

// user.printCart()

/////////////////////SAVED OLD CODE//////////////////
// addToCart(itemA,user)
// console.log("User's Cart after adding Apples: ")
// printCart(user)
// console.log("Cart Total:", cartTotal(user))

// for (let j = 0; j < 3; j++){
//     addToCart(itemB, user)
// }
// console.log("User's Cart after adding 3 - Brocolli: ")
// printCart(user)
// console.log("Cart Total: ", cartTotal(user))

// for (let k = 0; k < 3; k++ ){
//     addToCart(itemC, user)
// }

// console.log("User's Cart after adding 3-Organic Chicken Breasts: ")
// printCart(user)
// console.log("Cart Total: ", cartTotal(user))

// removeFromCart(itemB, user)
// console.log("User's cart after removing ItemB: ")
// printCart(user)
// console.log("Cart Total: ", cartTotal(user))

// removeQuantityFromCart(itemC, user, 2)
// console.log("User's cart after removing 2-ItemC: ")
// printCart(user)