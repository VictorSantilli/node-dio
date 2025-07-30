import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];

const myWhishList = [];

console.log("Welcome to the your Shopee Cart!!");

const item1 = await createItem("mousepad", 20.99 , 7);
const item2 = await createItem("mouse", 39.99 , 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myWhishList, item2);

console.log("Shopee Cart TOTAL IS")

await cartService.calculateTotal(myCart);
