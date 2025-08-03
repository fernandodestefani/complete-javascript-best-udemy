'use strict';

///////////////////////////////////
// Constructor function and new operator
// capital letter for constructor functions; array function doesnt work as constructor functions because it doesnt have the this keyword

/* const Person = function(firstName, birthYear){
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

///////////////////////////////////
// Prototype Inheritance

console.log(fernando.__proto__); // fernando's prototype === Person.prototype
console.log(fernando.__proto__.__proto__); // object prototype (top of prototype chain)
console.log(fernando.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__); // object prototype

// we can use this knowledge to create methods that are available for all arrays:
// remember that in practice you should NOT do it!
Array.prototype.unique = function(){
  return [...new Set(this)]
}

console.log(arr.unique());

// all the DOM elements are behind the scene objects
const h1 = document.querySelector('h1'); // h1 > html heading element > html element > element > node > event target > object > null

//functions itself are objects!

///////////////////////////////////
// Coding Challenge #1
const Car = function(make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function() {
  console.log(`${this.speed + 10}km/h`);
}

Car.prototype.brake = function() {
  console.log(`${this.speed - 5}km/h`);
}

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

car1.accelerate() */

///////////////////////////////////
// ES6 Classes

// classes are still functions
// class expression
// const PersonCl = class {}

// class declaration 
/* class PersonCl {
  constructor(fullName, birthYear){
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // We can simply writhe the methods here outside the constructor for performance reasons - it will be added to .prototype property
  callAge() {
    console.log(2025 - this.birthYear);
  }

  greet() {
    console.log(`Hey, I'm ${this.fullName}`)  
  }

  get age() {
    return 2025 - this.birthYear;
  }

  // Set a property that already exists => _property and use get in sequence
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`)
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋🏼');
    console.log(this);
  }

}

const jessica = new PersonCl('Jessica Davis', 1995);
console.log(jessica);
jessica.callAge()
console.log(jessica.age);
console.log(jessica.__proto__ === PersonCl.prototype); */

/* PersonCl.prototype.greet = function() {
  console.log(`Hey, I'm ${this.firstName}`);
} */

// jessica.greet()

// 1. Classes are NOT hoisted, which means we can NOT use them before declaration!
// 2. Class are first-class citizens, because we can passe them into and return them from functions
// 3. Classes are executed in strict mode

///////////////////////////////////
// Getters and Setters

/* const walter = new PersonCl('Walter White', 1965)

const account = {
  owner: 'Fernando',
  movements: [200, 530, 120, 300],

  get latest(){
    return this.movements.slice(-1).pop() 
  },

  set latest(mov) {
    this.movements.push(mov);
  }
}
// we just call latest as a property
console.log(account.latest);
account.latest = 50;
console.log(account.movements);
 */
///////////////////////////////////
// Static Methods

// Array.from() - this method is attached to array constructor and not the prototype. Therefore the arrays do NOT inherit this method

// Creating a static method on our won 
/* Person.hey = function() {
  console.log('Hey there 👋🏼');
}
Person.hey() this is NOT inherited */
// PersonCl.hey()

///////////////////////////////////
// Object.create - a third way of implementing prototype inheritance
// In practice, it is mainly used for true classes inheritance
/* const PersonProto = {
  calcAge() {
    console.log(2025 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979)
sarah.calcAge() */

///////////////////////////////////
// Coding challenge #2
/* class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  
  accelerate() {
    console.log(`${this.speed + 10}km/h`);
  }
  
  brake() {
    console.log(`${this.speed - 5}km/h`);
  }
  
  get speedUS(){
    console.log(`${this.speed / 1.6}mi/h`);
  }

  set speedUS(speed){
    this.speed = speed * 1.6
  }
}

const car1 = new CarCl('Ford', 120);
car1.speedUS;
car1.speedUS = 110;
console.log(car1.speed) */

///////////////////////////////////
// Inheritance between classes: constructor functions
const Person = function(firstName, birthYear){
  this.firstName = firstName;
  this.birthYear = birthYear;
}

Person.prototype.calcAge = function(){
  console.log(2025 - this.birthYear);
}

const Student = function(firstName, birthYear, course){
  Person.call(this, firstName, birthYear)
  this.course = course;
}

// Linking prototypes
// it's important to put this sentence here before defining methods into student.prototype, otherwise Object.create() will overwrite it
Student.prototype = Object.create(Person.prototype)
// Person prototype is the prototype of student prototype

Student.prototype.constructor = Student;

Student.prototype.introduce = function(){
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student("Mike", 2020, 'Computer Science');
mike.introduce()
mike.calcAge()

console.log(mike instanceof Student);// true
console.log(mike instanceof Person);// true

///////////////////////////////////
// Coding challenge #3
