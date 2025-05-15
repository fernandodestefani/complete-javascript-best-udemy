'use strict';
// Default Parameters
/* const bookings = [];
const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers){ //it can be dinamically calculated by default
  // numPassengers = numPassengers || 1; old way of doing default parameters
  
  const booking = {
    flightNum,
    numPassengers,
    price
  };
  console.log(booking);
  bookings.push(booking);
} */

/* createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', undefined, 1000); */

// How Passing Arguments Works: Value vs Reference
/* const flight = 'LH234';
const fernando = {
  name: 'Fernando Destefani',
  passport: 45346546478
}

const checkIn = function(flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 45346546478) {
    console.log('Checked in');
  } else {
    console.log("Wrong passport!");
  }
} */

// checkIn(flight, fernando);
// console.log(flight); // primitive => flightNum only contains a copy and not the original value. flightNum = flight; flighNum is a completely different variable
// console.log(fernando); // reference type (object), we are really copying the reference to that object in the memory heap. is the same as doing const passenger = jonas; but they both point to the same object in memory.
// we have be aware of this characteristic since it can be a font of many problems, especially when working with many developers
// JS only passes by value, never by reference. We can pass the reference value but never BY reference. 

// First-Class and Higher-Order Functions
// functions are just another type of objects, and since objects are values, functions are simply values. because of this we can store them in variables or proporties
// first-class functions are only a feature that states functions are simply values 
// we can pass functions as arguments to OTHER functions, return functions from functions and call methods on functions - function methods like bind
// Higher-Order functions are functions that receive other functions AND/OR that return a new function
// btnClose.addEventListener('click', greet) - greet is the callback function while addEventListener is the higher-order one 

// Functions accepting callback functions
/* const oneWord = function(str) {
  return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str){
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ')
} */

// Higher-order function
/* const transformer = function(str, fn){
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
}
 */
//transformer('JavaScript is the best!', upperFirstWord); // we're only passing the value in, we are NOT calling the function!
//transformer('JavaScript is the best!', oneWord); //callback function
// JS uses callbacks all the time!

// Functions Returning Functions
/* const greet = function(greeting) {
  return function(name){
    console.log(`${greeting}, ${name}!`);
  };
};

const greeterHey = greet('Hey');
greeterHey("Jonas");
greeterHey("Fernando");
// we can also do that
greet('Hey')('Steven'); */
// extremelly useful for function paradigm

// Arrow function
//const greet = (greeting) => (name) => console.log(`${greeting}, ${name}!`);
//greet("Hello")("Fernando")

// THE BIND METHOD
const lufthansa = {
  airline: "Lufthansa",
  iataCode: 'LH',
  bookings: [],
  // book: function(){}
  book(flightNum, name) { //inhanced object literals sintaxe
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({flight: `${this.iataCode}${flightNum}`, name });
  }
}

lufthansa.book(239, 'Fernando Destefani');
lufthansa.book(635, 'John Smith');
//console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
}

const book = lufthansa.book;
// Does NOT work 
// book(23, 'Sara Williams')
// and how do we tell JS what the this keyword should look like? there are some function methods to do that, like the bind method

const bookEW = book.bind(eurowings) // bind method doesnt call the function, only returns a new function where this keyword is set to eurowings
bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23); //the remaining function only needs the name now - this is called partial application
bookEW23("Fernando Destefani");
bookEW23("Sheldon Cooper");

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function(){
  console.log(this);
  this.planes++
  console.log(this.planes);
};

// document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane.bind(lufthansa)); //if not use the bind method, the this keyword will be the bottom itself

// Partial application => we can pre set params
const addTax = (rate, value) => value + value*rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23); //null because we dont care about the this keyword in this function
//the order of the arguments is important!
// console.log(addVAT(23));

/* const addTaxRate = function(rate){
  return function(value){
    return value + value*rate;
  }
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100)); */

// CODING CHALLENGE #1
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
// This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer(){
    const answer = Number(prompt("What is your favourite programming language? \n0: Javascript \n1: Python \n2: Rust \n3: C++ \n(Write option number):"))
    if (typeof answer === 'number' && (answer === 0 || answer === 1 || answer === 2 || answer === 3 )){
      this.answers[answer] ++;
      this.displayResults()
    } else {
      alert(`${answer} is not an answer!`)
    } 
  },
  displayResults(type="array") {
    if (type === "array"){
      console.log(this.answers);
    } else if (type === "string"){
      console.log(`Poll results are ${this.answers[0]}, ${this.answers[1]}, ${this.answers[2]}, ${this.answers[3]}`);
    }
  },
};

//document.querySelector(".poll").addEventListener("click", poll.registerNewAnswer.bind(poll))

// poll.registerNewAnswer();

// CLOSURES
/* const secureBooking = function(){
 let passengerCount = 0; // this varuable cannot be manipulated from outside 

 return function(){
  passengerCount++;
  console.log(`${passengerCount} passengers`);
 }
}

const booker = secureBooking();

booker(); 
booker();
booker(); */ // how booker function updated the passengerCount from secureBooking since this function had already finished of executing?
// closure makes a function remember all the variables that existed at the functions birthplace, allowing function returning functions
// passengerCount is NOT garbage collected because it is reachable by a closure
// a function has access to the variable environment VE of the execution context in which it was created. this linking is called closure
// a closure gives a function access to all the variables of its parent function, even after that parent function has returned. the function keeps a reference to its outer scope, which preserves the scope chain throughout time
// less formal: a closure is like a backpack that a function carries around wherever it goes. this backpack has all the variables that were present in the environment where the function was created.

// MORE CLOSURE EXAMPLES
// Example 1 - Reasignment
/* let f;
const g = function(){
  const a = 23;
  f = function(){
    console.log(a * 2);
  }
}

const h = function(){
  const b = 777;
  f = function(){
    console.log(b * 2);
  }
}
 */
//g();
//f();
// Re-assigning f function
//h();
//f();

//Example 2 - Timer
/* const boardPassengers = function(n, wait){
  const perGroup = n/3;

  setTimeout(function(){
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 03 groups, each with ${perGroup} passengers`);
  }, wait * 1000);


  console.log(`We'll start boarding in ${wait} seconds`);
}

const perGroup = 1000; //the closure even has priority over the scope chain
boardPassengers(180, 3); */