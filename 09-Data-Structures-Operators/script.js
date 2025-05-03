"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const italianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomatoes",
  "olive oil",
  "garlic",
  "basil",
]);

const mexicanFoods = new Set([
  "tortillas",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic",
]);

// Data needed for first part of the section
const weekdays = ['thu', 'fri', 'sat']

const openingHours = {
  [weekdays[0]]: {
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
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  // ES6 enhanced object literals
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    // destructuring a object in a function
    /* console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    ); */
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// we can pass objects as parameters - generally used for external libraries where you dont know the order of the parameters
restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
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
// its the opposite of the spread operator: pack elements into an array

// 1) DESTRUCTURING
// SPREAD, because on RIGHT side of =
/* const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(others); // it is called rest because it puts the rest of the elements into an array

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]; // the rest pattern must be the last in the destructuring assingment and must exist only one!
console.log(pizza, risotto, otherFood);

// Objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

// 2) FUNCTIONS
// SPREAD => passes multiple arguments as parameters

// REST
const add = function(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2,3);
add(5,3,7,2);
add(8,2,5,3,2,1,4);

const x = [23, 5, 7];
add(...x);
 */

// restaurant.orderPizza("mushrooms", 'onions', 'olives', 'spinach');

// Short Circuiting (&& and ||)
// Logical operators can use ANY data type, return ANY data type, short-circuiting
/* console.log(3 || 'Fernando'); // if first value is a truthy value, it immediately returns that first value with seeing the second value - thats why its called short-circuiting
console.log("" || 'Fernando');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || "" || 'Fernando' || 23 || null);

// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// setting default methods instead of using thernary operators or if/else statement
const guests2 = restaurant.numGuests || 10;
console.log(guests2); 
//both will not work if the number of guests is 0, because 0 is a falsy value

console.log('==== AND ====');
//work on the opposite way than || operator
console.log(0 && 'Fernando'); // if its falsy, short-circuiting returning the first value
console.log(7 && 'Fernando'); // if its truthy, the second value is returned
console.log("Hello" && 23 && null && 'Fernando');

// practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", 'spinach');
}

//its the same that
restaurant.orderPizza || restaurant.orderPizza("mushrooms", 'spinach'); // useful to execute codes if the first one is truthy
 */

// Nullish Coalescing Operator ??
/* restaurant.numGuests = 0;
 */
//const guests = restaurant.numGuests || 10;
//console.log(guests);
// it fixes such error
// it works with the idea of Nullish values and not falsy vallues: null and undefined; NOT include 0 or ''
/* const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
 */

// Logical assignment operatos
/* const rest1 = {
  name: "Capri",
//  numGuests: 20,
  numGuests: 0,
}

const rest2 = {
  name: 'La Piazza',
  owner: "Giovanni Rossi",
}
 */
// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
//rest1.numGuests ||= 10;
//rest2.numGuests ||= 10;
// it may not work with 0 because it is a falsy value

// ?? nullish assignment operator (null or undefined)
/* rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
rest1.owner &&= 'ANONYMOUS';
rest2.owner &&= "ANONYMOUS";

console.log(rest1, rest2);
 */

// CHALLENGE 1

/* const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// task 1
const [players1, players2] = game.players;
console.log(players1, players2);
//const players1 = game.players[0];
//const players2 = game.players[1];

// task 2
const [gk, ...fieldPlayers] = players1;

// task 3
const allPlayers = [...players1, ...players2];

// task 4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

// task 5
const {team1, x: draw, team2} = game.odds;

// task 6
const printGoals = function(...numbers){
  for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
  }
  console.log(game.scored.length);
};
// printGoals(...game.scored)

// task 7
team1 < team2 && console.log(`${game.team1} is more likely to win 🏆`);
team2 < team1 && console.log(`${game.team2} is more likely to win 🏆`); */

// The for-of Loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

//when you also want the index, besides the object:
/* for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
} */

/* for (const [i, el] of menu.entries()) {
  console.log(`${i+1}: ${el}`);
} */

// enhanced object literals
// console.log(restaurant);


// Optional Chaining (?.) - when a certain property doesnt exist, undefined is returned avoind error
/* if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open); 
 */// WITH OPTIONAL CHAINING
// console.log(restaurant.openingHours.mon?.open); // only if mon exists that open will be read from there
// console.log(restaurant.openingHours?.mon?.open);
// Exameple
/* const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
} */

// Methods
/* console.log(restaurant.order?.(0,1) ?? 'Method does not exist'); // checking if a method does exist before calling it
console.log(restaurant.buy?.() ?? 'Method does not exist');  */

// Arrays
/* const users = [{name: 'Fernando', email: 'henriqueorei@gmail.com'}];
console.log(users[0]?.name ?? "User array empty"); */

// Looping Objects
// looping through keys (property NAMES)
//const properties = Object.keys(openingHours);
// console.log(properties); transform openingHours keys into an array
/* let openStr = `We are open on ${properties.length} days: `;
for (const day of properties){
  openStr += `${day}, `;
}
 */// console.log(openStr);

// Property VALUES
//const values = Object.values(openingHours);
// console.log(values);

// Entire Object
//const entries = Object.entries(openingHours);
// console.log(entries);
// [key, value]
/* for (const [key, {open, close}] of entries){
  console.log(`On ${key}, we open at ${open} and close at ${close}`);
} */

// Challenge 2
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
};

// 2
let sum = 0;
let cont = 0;
for (const value of Object.values(game.odds)) {
  sum += value;
  cont += 1;
}
console.log(sum/cont);

// 3
for (const [key, value] of Object.entries(game.odds)){
  if (key === 'x') {
    console.log(`Odd of draw: ${value}`); 
  } else {
  console.log(`Odd of victory ${key}: ${value}`);
  };
};