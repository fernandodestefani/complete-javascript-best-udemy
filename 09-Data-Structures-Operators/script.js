'use strict';


// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '20:00', address}) { // destructuring a object in a function
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },
  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  }
};

// we can pass objects as parameters - generally used for external libraries where you dont know the order of the parameters
restaurant.orderDelivery({
  time: '22:30', 
  address: 'Via del Sole, 21',
  mainIndex: 2, 
  starterIndex: 2,
});

//

// destructuring is simply breaking complex data structure down to simpler data structure like a variable
/* const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
 */
/* const [x, y, z] = arr; // destructuring an array
console.log(x, y, z);
console.log(arr); // we are not destroying the array
 */

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// Switching variables
// if we want to switch the values
/* const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary); */

//do not need the temporary value in the middle
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// Destructuring inside destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// Default variables - when we dont know the lenght of the array - useful when getting data from API
/* const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r); */

// Destructuring objects
// we need to write the exact property names to extract variables from the object
// the order doesnt matter => we dont need to skip elements
//const {name, openingHours, categories} = restaurant;
//console.log(name, openingHours, categories);

// what if we want the names to be different from the property names
//const {name: restaurantName, openingHours: hours, categories: tags } = restaurant;
//console.log(restaurantName, hours, tags);

// Default values
// we can set default values to avoid undefined when dealing with third part data
//const { menu = [], starterMenu: starters = []} = restaurant;
//console.log(menu, starters);

// Mutating variables 
//let a = 111;
//let b = 999;
//const obj = {a: 23, b: 7, c: 14};
//({a, b} = obj); // wrapp this destructuring assignments into parentesis
//console.log(a, b);

// Nested objects
//const {fri: {open, close}} = openingHours;
//console.log(open, close);

// The spread operator (...)
/* const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);
 */
//const newMenu = [...restaurant.mainMenu, "Gnocci"]; // we are building a new array from scratch 
//console.log(newMenu);

// Uses
// Shallow copies 
//const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
/* const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(menu);
 */
// most of data structures in JS are iterables, except objects
// Iterables: arrays, strings, maps, sets
/* const str = 'Fernando';
const letters = [...str, " ", "D."];
console.log(letters);
*/
//we can only use the spread operator when building an array or passing values into a function
//console.log(...str);

/* const ingredients = [prompt("Lets make pasta! Ingredient 1:"), prompt("Ingredient 2:"), prompt("Ingredient 3:")];
console.log(ingredients);
restaurant.orderPasta(...ingredients); */
// Objects
//const newRestaurant = {foundedIn: 1998, ...restaurant, founder: "Guiseppe"};
//console.log(newRestaurant);
// Copy
//const restaurantCopy = {...restaurant};

// Rest Pattern and Parameters
