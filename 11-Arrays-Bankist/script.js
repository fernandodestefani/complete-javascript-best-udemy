"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements) {
  containerMovements.innerHTML = ""; // innerHTML is similar to textContent, but innerHTML also includes the HTML tags besides the text itself

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function(acc) {
  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0)
  labelSumIn.textContent = `${incomes}€`

  const out = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0)
  labelSumOut.textContent = `${Math.abs(out)}€`

  const interest = acc.movements.filter(mov => mov > 0)
  .map(deposit => deposit * acc.interestRate/100)
  .filter(int => int >= 1)
  .reduce((acc, int) => acc + int, 0)
  labelSumInterest.textContent = `${interest}€`
}

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map(function (name) {
        return name[0];
      })
      .join("");
  });
};

createUsernames(accounts);

const updateUI = function(acc) {
  // Display movements
    displayMovements(acc.movements)

    // Display balance 
    calcDisplayBalance(acc)

    // Display summary
    calcDisplaySummary(acc)
}

// Event handler
let currentAccount;

btnLogin.addEventListener('click', function(e) {
  // Prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

  if(currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 1;
    
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
})

btnTransfer.addEventListener('click', function(e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  inputTransferAmount.value = inputTransferTo.value = '';

  if (amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc.username !== currentAccount?.username) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    // Update UI
    updateUI(currentAccount);
  }
})
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/* const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
 */
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// SIMPLE ARRAY METHODS
// let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE - doesnt alterate the original array, returning a new one. similar to string.slice method
/* console.log(arr.slice(2));
console.log(arr.slice(2, 4)); // the end param is NOT included in the output
console.log(arr.slice(-2));
console.log(arr.slice(-1)); // last element of an array
console.log(arr.slice(1, -2));
console.log(arr.slice()); // create a shallow copy of an array, the same way that [...arr] does, however arr.slice() can be used in chaining methods 
 */

//SPLICE - does the same however it MUTATE the array
/* console.log(arr.splice(2)); // extract elements from the original array
arr.splice(-1); // USE CASE: useful to remove the last element from an array
arr.splice(1, 2); // removes 2 elements starting in position 1
console.log(arr); */

//REVERSE
/* const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2); // does actually MUTATE the array

//CONCAT 
const letters = arr.concat(arr2); //does NOT mutate the original array. we did this before using [...arr, ...arr2]
console.log(letters); 

//JOIN
console.log(letters.join(' => ')); */

//THE NEW AT METHOD
/* const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

//use case - getting last array element
console.log(arr[arr.length - 1]);
// console.log(arr[-1]); - that is undefined
console.log(arr.slice(-1)[0]); //slice returns an array
console.log(arr.at(-1));
console.log(arr.at(-2)); //and enables method chaining
console.log("fernando".at(-1)); //also works with strings */

// LOOPING ARRAYS: FOR EACH

//for (const movement of movements) {
/* for (const [i, movement] of movements.entries()){
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log("---- FOREACH ----");
movements.forEach(function (movement, index, array) { //what matters is the order and not the name of the params
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
}); */
// you cannot breakout of a forEach loop. It will always loop the ENTIRE array and there is NOT what you can do about it

// CODING CHALLENGE #1
/* const petsJulia = [3, 5, 2, 12, 7];
const dogsKate = [10, 5, 6, 1, 4];

const dogsJulia = petsJulia.slice(1, 3);

const checkDogs = function(dogsJulia, dogsKate){
  const dogsages = [...dogsJulia, ...dogsKate];
  dogsages.forEach(function(dogage, i){
    if (dogage < 3){
      console.log(`Dog number ${i+1} is still a puppy 🐕`);
    } else {
      console.log(`Dog number ${i+1} is an adult 🐶, and is ${dogage} years old`);
    }
  })
}

checkDogs(dogsJulia, dogsKate); */

/////// DATA TRANSFORMATION: MAP, FILTER E REDUCE
//map: loop through arrays creating a brand new array based on the original one - more useful than forEach method
//filter: returns a new array containing the array elements that passed a specified test condition
//reducer: reduces (boils) all array el down to one single value (eg adding all elements together). there is no new array in this case, only the reduced value

//THE MAP METHOD
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
const movementsUSG = movements.map(function(move){
  return move * eurToUsd;
})
console.log(movements);
console.log(movementsUSG);
// it can use the sames params that forEach function
const movementsDescriptions = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov}`;
  } else {
    return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  }
});

console.log(movementsDescriptions); */

// FILTER METHOD
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function(mov){
  return mov > 0;
})

const withdrawals = movements.filter(function(mov){
  return mov < 0;
})

console.log(deposits);
console.log(withdrawals); */

// THE REDUCE METHOD
//accumulator -> snowball
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const balance = movements.reduce(function(acc, cur, i, arr){
  return acc + cur;
}, 0); 
console.log(balance); */

// Maximum Value
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max); */

// CHALLENGE CODE #2
/* const calcAverageHumanAge = function(dogsAges){
  const humanYears = dogsAges.map(function(dogAge){
    if (dogAge <= 2) {
      return 2 * dogAge;
    } else {
      return 16 + dogAge * 4;
    }
  })
  const adultDogs = humanYears.filter(function(adultDog){
    return adultDog >= 18;
  })
  const sumHumanAge = adultDogs.reduce(function(acc, humanAge){
    return acc + humanAge
  }, 0);
  const averageHumanAge = sumHumanAge/adultDogs.length;
  console.log(averageHumanAge);
}
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]); */

// The Magic of Chaining Methods
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

// pipeline
const totalDepositsUSD = movements
  .filter((mov) => mov > 0) // return an array
  .map((mov) => mov * eurToUsd) // return an array
  .reduce((acc, mov) => acc + mov, 0); // return a number

// avoid methods that mutate arrays!

console.log(totalDepositsUSD); */

///////////////// CODING CHALLENGE 3 ///////////////////
/* const calcAverageHumanAge = function(dogsAge) {
  return dogsAge.map(age => (age <= 2 ? age * 2 : age * 4 + 16)).filter(age => age >= 18).reduce((acc, age, i, arr) => acc + age/arr.length, 0)  
}

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
 */

// The Find Method
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal = movements.find(mov => mov < 0) */ //return the first element of an array that satisfy the condition
// console.log(firstWithdrawal);

// it is used to find an object in the array based on some propriety of that object - array of objects
/* console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis')
console.log(account); */

// The findIndex Method
