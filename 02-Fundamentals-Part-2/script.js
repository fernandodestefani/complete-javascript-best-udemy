'use strict';
//first line of code in the script to activate it

// Functions
/* function logger() {
  console.log("My name is Fernando");
}

// calling / running / invoking the function 
logger();
 */

/* function fruitProcessor(apples, oranges) {
  console.log(apples, oranges)
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const orangeJuice = fruitProcessor(0, 5);
console.log(orangeJuice);

const orangeAppleJuice = fruitProcessor(2, 4);
console.log(orangeAppleJuice);
 */

// function declarations vs. expressions (anonimous)

// function declaration - can be called in the code before defined
/* function calcAge1(birthYear) {
  return 2025 - birthYear;
}
const age1 = calcAge1(1993);

// function expression
const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
}
age2 = calcAge2(1993)
console.log(age1, age2); */

// arrow functions - a way of making function expressions simpler
/* const calcAge3 = birthYear => 2025 - birthYear;
const age3 = calcAge3(1993);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2025 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1993, 'Fernando')); */

// functions calling other functions

/* function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3)) */

// Reviewing Functions
/* const calcAge = function (birthYear) {
  return 2025 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if(retirement > 0) {
    return retirement;
  } else {
    return -1;
  }

}
console.log(yearsUntilRetirement(1993, 'Fernando')); */
// function declaration can be used before it's declared
// funcion expression is a function value stored in a variable
// arrow function has no this keyword, being great for one-line functions

// challenge #1

//calcAverage
/* const calcAverage = (score1, score2, score3) => (score1+score2+score3)/3;

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
  } else if (avgKoalas >= 2 * avgDolphins) {
    return console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
  } else {
    return console.log(`No team wins`)
  }
}

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolphins, avgKoalas); */

// introduction to arrays
/* const friends = ["Michael", 'Steven', 'Peter'];
const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay'; //only primitive values are immutable, and array is not one of them
console.log(friends);

const firstName = 'Fernando';
const fernando = [firstName, 'Destefani', 2025 - 1993, 'teacher', friends];
console.log(fernando) */

// Exercise
/* const calcAge = function (birthYear) {
  return 2025 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];
// we can do operations with arrays
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
const ages = [calcAge(years[0]), age2, age3]
console.log(ages); */

// basic array operations
/* const friends = ["Michael", 'Steven', 'Peter'];
const newLenght = friends.push('Jay'); //add elements to the end of an array and returns the new lenght
console.log(friends);
console.log(newLenght);

friends.unshift("John"); //add elements to the beginning of an array
// remove elements
const popped = friends.pop(); //last and returns the popped element
console.log(friends);
console.log(popped);

friends.shift(); //first 
console.log(friends);

//localization
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf("Bob")); // -1 element that it's not in the array

console.log(friends.includes('Steven')); //returns true ou false
console.log(friends.includes('Bob'));

if(friends.includes('Steven')) {
  console.log("You have a friend called Steven");
} */

// challenge 2
/* function calcTip(bill) {
  if (bill >= 50 && bill <= 300){
    return bill * 0.15;
  } else {
    return bill * 0.20;
  }
}
console.log(calcTip(100));

const bill = [125, 555, 44];
const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])]
console.log(tips);
const total = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]]
console.log(total); */

//introduction to objects
/* const fernando = {
  firstName: "Fernando",
  lastName: "Destefani",
  age: 31,
  job: 'programmer',
  friends: ["Michael", "Peter", "Steven"]
}; */ //different from arrays, the order of properties doesn't matter at all. usefull for unestructural data, while arrays for ordened data

//Dot and bracket notation
/* console.log(fernando.lastName);
console.log(fernando['lastName']); */ //can use an expression instead of the name of a property

/* const nameKey = "Name";
console.log(fernando['first' + nameKey]);
console.log(fernando['last' + nameKey]);
 */
/* const interestedIn = prompt('What do you want to know about Fernando? Choose between firstName, lastName, age, job and friends');

if(fernando[interestedIn]) {
  console.log(fernando[interestedIn]);
} else {
  console.log("Wrong request! Choose between firstName, lastName, age, job and friends");
} */
/* fernando.location = "Brazil";
fernando["email"] = "henriqueorei@gmail.com"
console.log(fernando);
 */

//Challenge
/* console.log(`${fernando.firstName} has ${fernando.friends.length} friends, and his best friend is called ${fernando.friends[0]}`) */

//Object Methods
/* const fernando = {
  firstName: "Fernando",
  lastName: "Destefani",
  birthYear: 1993,
  job: 'programmer',
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
 */  /* calcAge: function (birthYear) {
    return 2025 - birthYear;
  } */
    /* calcAge: function () {
    return 2025 - this.birthYear;
  } */
/*   calcAge: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
  },
  summary: function () {
    return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`
  }
};
 */
// this keyword is equal to the object which the method is called
//objects can use function expression, which is called as methods
//cannot use function declcaration
/* console.log(fernando.calcAge());
console.log(fernando.age);
 */
// Challenge
/* console.log(fernando.summary()); */

// Challenge 3
/* const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.bmi = this.mass/(this.height ** 2);
    return this.bmi;
  },
}

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.bmi = this.mass/(this.height ** 2);
    return this.bmi;
  },
}

mark.calcBMI();
john.calcBMI();

if (john.bmi > mark.bmi) {
  console.log(`John's BMI ${john.bmi} is higher than Mark's ${mark.bmi}`);
} else {
  console.log(`Mark's BMI ${mark.bmi} is higher than John's ${john.bmi}`);
}
 */

// the for loop
// for loop keeps running while condition is TRUE
/* for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋🏿‍♂️`);
} */

// looping arrays, breaking and continuing
/* const fernando = [
  "Fernando",
  "Destefani",
  31,
  'programmer',
  ["Michael", "Peter", "Steven"]
];

const types = [];

for (let i=0; i <= (fernando.length - 1); i++) {
  // reading from fernando array
  console.log(fernando[i], typeof(fernando[i]));
  // filling types array 
  // types[i] = typeof(fernando[i]);
  types.push(typeof(fernando[i]));
}

console.log(types); */

/* const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages[i] = 2025 - years[i];
}

console.log(ages); */

// continue and break
/* const fernando = [
  "Fernando",
  "Destefani",
  31,
  'programmer',
  ["Michael", "Peter", "Steven"]
]; */
// only strings
/* for (let i = 0; i < fernando.length; i++) {
  if(typeof fernando[i] !== "string") continue;
  console.log(fernando[i]);
} */

// break with number
/* for (let i = 0; i < fernando.length; i++) {
  if(typeof fernando[i] === "number") break;
  console.log(fernando[i]);
} */

/* const fernando = [
  "Fernando",
  "Destefani",
  31,
  'programmer',
  ["Michael", "Peter", "Steven"]
];

for (let i = fernando.length - 1; i >= 0; i--) {
  console.log(i, fernando[i]);
} */


// loops in loops
/* for (let exercise = 1; exercise < 4; exercise ++) {
  console.log(`---------- Starting exercise ${exercise}`)
  for (let rep = 1; rep <6; rep ++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋🏿`)
  }
} */

// looping backwards and loops in loops
/* const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`)
  }
} */

// while loop
/* let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep} 🏋🏿`)
  rep++;
} */

/* 
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}
console.log(`Loop is about to end...`) */

// Challenge #4 
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill) {
  if (bill >= 50 && bill <= 300){
    return bill * 0.15;
  } else {
    return bill * 0.20;
  }
}

for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
  totals[i] = tips[i] + bills[i];
}

const calcAverage = function (arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage(totals));
