import { v4 as uuidv4 } from "uuid";
let uuid = uuidv4()
console.log(uuid)

//created types of Item and User
type Item = {
    id:string,
    name: string,
    price: number,
    description: string
}

type User = {
    id: string,
    name: string,
    age: number,
    cart: Item[]
}

//created type to describe a user
function createUser(name:string, age:number): User{
    const user: User = {
        id:uuid,
        name,
        age,
        cart: []
    }
    return user
}
function createItem(name:string, price:number, description:string): Item {
    const item: Item = {
        id:uuid,
        name,
        price,
        description
    }
    return item
}

function addToCart(item:Item, user:User):void{
    user.cart.push(item)
}

function removeFromCart(item:Item, user:User):void {
    user.cart = user.cart.filter(cartItem => cartItem.id !== item.id)
}

function removeQuantityFromCart(item:Item, user: User, quantity: number): void{
    const remainingItems: Item[] = []
    let count = 0

    for (const cartItem of user.cart) {
        if (cartItem.id === item.id) {
            if (count < quantity) {
                count ++
            }else {
                remainingItems.push(cartItem)
            }
        } else {
            remainingItems.push(cartItem)
        }
    }
    user.cart = remainingItems
}

function cartTotal(user: User): number {
    let total = 0

    for (const item of user.cart) {
        total = total + item.price
    }
    return total
}

function printCart(user:User): void {
    console.log(`These are the items in ${user.name}'s cart: `)
    for (const item of user.cart){
        console.log(`-> ${item.name}: $ ${item.price}`)
    }
}

// //might need a function to generate the UUID, placeholder for now, otherwie see above
// function generateUUIDforUser():string {
//     return uuid
// }

//create Driver Code to emulate a front end user
const user = createUser("Sebastian Masters", 21)

const itemA = createItem("Apples", 5.00, "Bag of Apples")
const itemB = createItem("Brocolli", 3.00, "2 stems of broccoli")
const itemC = createItem("Chicken Breasts", 12.00, "Organic Chicken Breast")

addToCart(itemA,user)
console.log("User's Cart after adding Apples: ")
printCart(user)
console.log("Cart Total:", cartTotal(user))

for (let j = 0; j < 3; j++){
    addToCart(itemB, user)
}
console.log("User's Cart after adding 3 - Brocolli: ")
printCart(user)
console.log("Cart Total: ", cartTotal(user))

for (let k = 0; k < 3; k++ ){
    addToCart(itemC, user)
}

console.log("User's Cart after adding 3-Organic Chicken Breasts: ")
printCart(user)
console.log("Cart Total: ", cartTotal(user))

removeFromCart(itemB, user)
console.log("User's cart after removing ItemB: ")
printCart(user)
console.log("Cart Total: ", cartTotal(user))

removeQuantityFromCart(itemC, user, 2)
console.log("User's cart after removing 2-ItemC: ")
printCart(user)