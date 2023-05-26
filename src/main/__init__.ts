import { User,Shop } from './index'

const shop = new Shop()
//const user = new User()
//const item = new Item()

const user = new User ('Sebastian', 21)

const itemA = shop.items[0]
const itemB = shop.items[1]
const itemC = shop.items[2]

user.addToCart(itemA)
user.addToCart(itemB)
user.addToCart(itemC)

user.printCart()

user.removeFromCart(itemA)

const quantityToRemoveFromCart = 1
user.removeItemFromCart(itemB, quantityToRemoveFromCart)

user.printCart()

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