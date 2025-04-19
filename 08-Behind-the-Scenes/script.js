'use strict';

// global scope, function scope and block scope;
// functions are block scope if 'use strict' is declarated;
// javascript always try first to look for the variable name in the current scope;
// therefore, its not a problem at all to have different functions with similar parameter names
// its possible and acceptable to have different variables with equal names 

/* function calcAge(birthYear) {
  const age = 2025 - birthYear;
  console.log(firstName);
  return age;
}

const firstName = "Fernando";
calcAge(); */

// tdz was introducted in ES6 because makes it easier to avoid and catch errors, ever since accessing variables before declaration is bad practice and should be avoided;

// dont use var to declare variables; use const most of the time
// declara variables at the top and always declare functions first and only use them after their declaration

/* console.log(this);
const calcAge = function(birthYear) {
  console.log(2025 - birthYear);
  console.log(this);
}
calcAge(1993);

const calcAgeArrow = birthYear => {
  console.log(2025 - birthYear);
  console.log(this);
}
calcAgeArrow(1993) */

/* const fernando = {
  firstName: 'Fernando',
  year: 1993,
  calcAge: function () { */

    // Solution 1
    /*     console.log(this);
    console.log(2025 - this.year);
    const self = this; // self or that 
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    }
    isMillenial(); */

    // Solution 2 - ES6 => Arrow function uses the this keyword from the parent scope
/*     console.log(2025 - this.year);
    
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    }
    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};

fernando.calcAge(); */


// fernando.greet();
//NEVER EVER USE A ARROW FUNCTION AS A METHOD

//like the this keyword, arguments keyword is only available in regular functions
/* const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
}
console.log(addExpr(2,3));
console.log(addExpr(2, 3, 5));
 */

// Objects References in Practice

/* const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams', 
  age: 27,
}
console.log(jessica);

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessica = marryPerson(jessica, 'Davis') */

/* const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
 */
/* console.log("Before:", jessica);
console.log("After:", marriedJessica); */

/* const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams', 
  age: 27,
  family: ['Alice', 'Bob'], // nested object
}; */

// const jessicaCopy = {...jessica} // spread operator - we also copy the reference to the array - both jessica and jessicaCopy point to the same object in the heap and share the same reference address
// shallow copy
/* jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary', 'John');
console.log(jessica);
console.log(jessicaCopy); // an object (array) inside an object
 */

// Deep copy or clone
/* const jessicaClone = structuredClone(jessica);
jessicaClone.family.push('Mary', 'John');
console.log(jessica);
console.log(jessicaClone); */

