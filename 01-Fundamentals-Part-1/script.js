//===========================//
/* Values and Variables

let js = "amazing";
console.log(40 + 8 + 23 - 10);
console.log('Fernando');
console.log(31);

// camelCase Notation
let firstName = 'Fernando';
console.log(firstName);

// UPPER CASE in constants
let PI = 3.1415;

let myFirstJob = 'Doctor';
let myCurrentJob = 'Programmer'; */

//===========================//
// Data Types
/* let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 31);
console.log(typeof "Fernando");

javascriptIsFun = 'YES!'
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year); //undefined is both the value and the type of it */

//===========================//
// let, const and var
// always declare variables
// let => empty variables and mutate the variable 
/* let age = 31;
age = 32;

// const => immutable variable
const birthYear = 1993;
 */
// var => before ES6

//===========================//
// Basic operators
/* const firstName = 'Fernando';
const lastName = 'Destefani';
console.log(firstName + " " + lastName);

let x = 10 + 5; // x = 15;
x += 10; // x = x + 10;
x++; // x = x + 1;
 */

//===========================//
// Operator precedence

//===========================//
// Challenge 1
/* let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;
let BMIMark = markWeight / markHeight ** 2;
let BMIJohn = johnWeight / johnHeight ** 2;
let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
 */

//===========================//
// Strings and template literals
/* const firstName = "Fernando";
const job = 'doctor';
const birthYear = 1993;
const year = 2025;

const fernando = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(fernando);

const fernandoNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(fernandoNew);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String with
multiple
lines`) */

//===========================//
// if / else statements

/* const age = 15;

if(age >= 18) {
  console.log('Sarah can start driving license 🚗')
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century); */

//===========================//
// Challenge 2
/* let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;
let BMIMark = markWeight / markHeight ** 2;
let BMIJohn = johnWeight / johnHeight ** 2;
if(BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than Jhon's (${BMIJohn})!`)
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
} */

//===========================//
// Type Conversion and Coercion
// type conversion
/* let inputYear = '1991';
console.log(Number(inputYear), inputYear, typeof(inputYear));
inputYear = Number(inputYear);
console.log(inputYear);

console.log(String(23), 23);

// type coercion
console.log("I'm " + 31 + " years old"); // convert to a string
console.log("23" - "10" - 3); // convert to a number */

//===========================//
// truthy and falsy values
// 5 falsy values: 0, '', undefined, null, NaN

/* console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}

let height;
if(height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED")
} */

//===========================//
// equality operators
// = assignment 
// === comparison operator
// === strict equality operator; doenst perform type coercion !==
// == loose equality operator; perform type coercion !=
/* const age = "18";
if (age === 18) console.log('You just became an adult :D (strict)');
if (age == 18) console.log('You just became an adult :D (loose)');

const favouriteNumber = Number(prompt("What's your favourite number?"));
console.log(favouriteNumber);
console.log(typeof favouriteNumber);

if (favouriteNumber === 23) {
  console.log("Cool! 23 is an amazing number!")
} else if (favouriteNumber === 7) {
  console.log("7 is the God's number!")
} else {
  console.log("Number is not 7 or 23 :(")
}
 */

//===========================//
// boolean logic AND OR & NOT
// logical operators 
/* const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if(hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!")
} else {
  console.log("Someone else should drive")
} */

//===========================//
// Challenge #3
/* const scoreDolphins = (97 + 112 + 101)/ 3;
const scoreKoalas = (109 + 95 + 106)/3;
if(scoreDolphins === scoreKoalas && scoreDolphins >= 100) {
  console.log("Both win the trophy!")
} else if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy 🏆")
} else if (scoreKoalas > scoreDolphins  && scoreKoalas >= 100) {
  console.log("Koalas win the trophy 🏆")
} else {
  console.log("No team wins the trophy 😢")
}
 */

//===========================//
// The switch statement 
/* const day = 'monday';

switch(day) {
  case "monday": // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D')
    break;
  default:
    console.log('Not a valid day!')
} */

//===========================//
// Statements and Expressions
// statements => ends with ; is like a complete sentencec
// expressions => value

//===========================//
// The conditional (ternary) operator
// advantages => assingment value to a variable; use it in template literal
/* const age = 23;
// age >= 18 ? console.log("I like to drink wine 🍷") : console.log("I like to drink juice 🍹");
const drink = age >= 18 ? "wine 🍷" : "juice 🍹";
// console.log(drink);
console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "juice 🍹"}`); */

//===========================//
// Challenge #4
/* let billValue = 430;
const tip = billValue >= 50 && billValue <= 300 ? 0.15 : 0.2;
const totalValue = billValue * (1 + tip);
console.log(`The bill was ${billValue}, the tip was ${tip} and the total value ${totalValue}`);
 */