'use strict';
// Default Parameters
const bookings = [];
const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers){ //it can be dinamically calculated by default
  // numPassengers = numPassengers || 1; old way of doing default parameters
  
  const booking = {
    flightNum,
    numPassengers,
    price
  };
  console.log(booking);
  bookings.push(booking);
}

/* createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', undefined, 1000); */

// How Passing Arguments Works: Value vs Reference
const flight = 'LH234';
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
}

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
const oneWord = function(str) {
  return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str){
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ')
}

// Higher-order function
const transformer = function(str, fn){
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord); // we're only passing the value in, we are NOT calling the function!
transformer('JavaScript is the best!', oneWord); //callback function
// JS uses callbacks all the time!

