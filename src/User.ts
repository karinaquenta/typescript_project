import Item from './Item';
import { v4 as uuidv4 } from 'uuid';

export default class User {
    private _id: string;
    private _userName: string;
    private _age: number;
    private _cart: Item[];

    constructor(userName: string, age: number) {
        this._id = uuidv4();
        this._userName = userName;
        this._age = age;
        this._cart = [];
    }

    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
    }

    public get firstName(): string {
        return this._userName;
    }

    public set firstName(value: string) {
        this._userName = value;
    }

    public get age(): number {
        return this._age;
    }

    public set age(value: number) {
        this._age = value;
    }

    public get cart(): Item[] {
        return this._cart;
    }

    public set cart(value: Item[]) {
        this._cart = value;
    }

    // public addToCart(item: Item): string {
    //     this._cart.push(item);
    //     return `Added 1 ${item.name} to cart.`;
    // }

    // public removeFromCart(item: Item): void {
    //     this._cart = this._cart.filter((cartItem) => {
    //         return cartItem.id !== item.id;
    //     });
    //     console.log(`You removed all ${item.name} from your cart.`);
    // }

    // public removeItemFromCart(item: Item, quantity: number): void {
    //     let currentItems = quantity;
    //     this._cart = this._cart.filter((cartItem) => {
    //         if (cartItem.id === item.id && currentItems) {
    //             currentItems--;
    //             return false;
    //         }
    //         return true;
    //     });
    // }

    // public cartTotal(): number {
    //     let total = 0;
    //     for (const item of this._cart) {
    //         total += item.price;
    //     }
    //     return total;
    // }

    // public printCart(): void {
    //     console.log(`These are the items in ${this.firstName}'s cart:`);
    //     for (const item of this._cart) {
    //         console.log(`-> ${item.name}: $${item.price}`);
    //     }
    // }
}
// SNPA HERE
//     function cartTotal(user) {
//         var total = 0;
//         for (var _i = 0, _a = user.cart; _i < _a.length; _i++) {
//             var item = _a[_i];
//             total = total + item.price;
//         }
//         return total;
//     }
//     function printCart(user) {
//         console.log("These are the items in ".concat(user.name, "'s cart: "));
//         for (var _i = 0, _a = user.cart; _i < _a.length; _i++) {
//             var item = _a[_i];
//             console.log("-> ".concat(item.name, ": $ ").concat(item.price));
//         }
//     }
// }