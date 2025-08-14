// exporting module
console.log('Exporting module');

// blocking code
console.log('Start fetching users');
await fetch('https://jsonplaceholder.typicode.com/users');
console.log('Finish fetching users');

// private - 
const shippingCost = 10;
export const cart = [];

//named export
// exports always have to happen in top level code
/* export const addToCart = function(product, quantity){
  cart.push({product, quantity});
  console.log(`${quantity} ${product} added to cart`);
}
 */
// exports multiple variables
const totalPrice = 237;
const totalQuantity = 23;

export {totalPrice, totalQuantity as tq}

// default export => exports the value not the variable
export default function(product, quantity){
  cart.push({product, quantity});
  console.log(`${quantity} ${product} added to cart`);
}