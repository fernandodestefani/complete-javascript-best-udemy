'use strict';

///////////////////////////////////
// Constructor function and new operator
// capital letter for constructor functions; array function doesnt work as constructor functions because it doesnt have the this keyword

const Person = function(firstName, birthYear){
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method inside a constructor function
}
// the main difference compared to a regular function is the new operator
const fernando = new Person('Fernando', 1993)
// 1. new {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const jay = 'Jay'

console.log(fernando instanceof Person);// true
console.log(jay instanceof Person);// false

///////////////////////////////////
// Prototypes
console.log(Person.prototype);
// now there is a only one function that all these objects can call it instead of lots of copies of it
Person.prototype.calcAge = function(){
  console.log(2025 - this.birthYear);
}

fernando.calcAge();
// all objects have access to properties and methods of their prototypes
console.log(fernando.__proto__);
console.log(fernando.__proto__ === Person.prototype);// true
console.log(Person.prototype.isPrototypeOf(fernando));// true
console.log(Person.prototype.isPrototypeOf(Person));// false
// you can think as Person.prototypeOfLinkedObjects

Person.prototype.species = 'Homo sapiens';
console.log(fernando.species);

console.log(fernando.hasOwnProperty('firstName'));
console.log(fernando.hasOwnProperty('species'));