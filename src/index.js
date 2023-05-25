"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var uuid = (0, uuid_1.v4)();
console.log(uuid);
//created type to describe a user
function createUser(name, age) {
    var user = {
        id: uuid,
        name: name,
        age: age,
        cart: []
    };
    return user;
}
function createItem(name, price, description) {
    var item = {
        id: uuid,
        name: name,
        price: price,
        description: description
    };
    return item;
}
function addToCart(item, user) {
    user.cart.push(item);
}
function removeFromCart(item, user) {
    user.cart = user.cart.filter(function (cartItem) { return cartItem.id !== item.id; });
}
function removeQuantityFromCart(item, user, quantity) {
    var remainingItems = [];
    var count = 0;
    for (var _i = 0, _a = user.cart; _i < _a.length; _i++) {
        var cartItem = _a[_i];
        if (cartItem.id === item.id) {
            if (count < quantity) {
                count++;
            }
            else {
                remainingItems.push(cartItem);
            }
        }
        else {
            remainingItems.push(cartItem);
        }
    }
    user.cart = remainingItems;
}
function cartTotal(user) {
    var total = 0;
    for (var _i = 0, _a = user.cart; _i < _a.length; _i++) {
        var item = _a[_i];
        total = total + item.price;
    }
    return total;
}
function printCart(user) {
    console.log("These are the items in ".concat(user.name, "'s cart: "));
    for (var _i = 0, _a = user.cart; _i < _a.length; _i++) {
        var item = _a[_i];
        console.log("-> ".concat(item.name, ": $ ").concat(item.price));
    }
}
// //might need a function to generate the UUID, placeholder for now, otherwie see above
// function generateUUIDforUser():string {
//     return uuid
// }
//create Driver Code to emulate a front end user
var user = createUser("Sebastian Masters", 21);
var itemA = createItem("Apples", 5.00, "Bag of Apples");
var itemB = createItem("Brocolli", 3.00, "2 stems of broccoli");
var itemC = createItem("Chicken Breasts", 12.00, "Organic Chicken Breast");
addToCart(itemA, user);
console.log("User's Cart after adding Apples: ");
printCart(user);
console.log("Cart Total:", cartTotal(user));
for (var j = 0; j < 3; j++) {
    addToCart(itemB, user);
}
console.log("User's Cart after adding 3 - Brocolli: ");
printCart(user);
console.log("Cart Total: ", cartTotal(user));
for (var k = 0; k < 3; k++) {
    addToCart(itemC, user);
}
console.log("User's Cart after adding 3-Organic Chicken Breasts: ");
printCart(user);
console.log("Cart Total: ", cartTotal(user));
removeFromCart(itemB, user);
console.log("User's cart after removing ItemB: ");
printCart(user);
console.log("Cart Total: ", cartTotal(user));
removeQuantityFromCart(itemC, user, 2);
console.log("User's cart after removing 2-ItemC: ");
printCart(user);
