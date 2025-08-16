'use strict';

////////////////////////////////////
// overview of modern javascript development
//npm: both repository and software to install packages. it also contains development tools like parcel 
//build process: webpack or parcel (0 configuration bundle) - (bundlers)
// 1 bundling - join all modules into one file;
// 2 transpiling/polyfiling => convert modern js back to ES5, usually done using a tool called babel
// javascript bundle ready to be deployed on a server for production

////////////////////////////////////
// overview of modules in js
// public API is what we export from modules 
// native js (ES6) modules: modules stored in files, exactly one module per file.
// imports and exports need to happen at top-level, outside of any function or any if block. imports are hoisted
// html linking <script type='module'>
// importing modules before execution 
// modules are imported synchronously, which is possible thanks to top-level ('static') imports, which make imports known before execution. this makes bundling and dead code elimination possible

////////////////////////////////////
// exporting and importing in es6 modules

// importing module - named exports
/* import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";

// console.log(shippingCost);
addToCart('bread', 5);
console.log(price, tq); */

// importing everything at the same time
/* import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice); */

console.log('Importing module');
// importing the default export no matter how its called
import add from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

// imports are in fact a live connection to exports, which means that they both point to the same place in memory 
import { cart } from './shoppingCart.js';
console.log(cart);

////////////////////////////////////
// top-level await (ES2022) - outside of an async function. many times can be harmful, because it blocks the execution
/* 
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data); 
*/

const getLastPost = async function() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json();
  return {title: data.at(-1).title, text: data.at(-1).body}
}

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);

// the code in the script has to wait for the code in the shoppingCart.js to finish because of the top level await that blocks the execution not only of its own module but the module that is importing it.

////////////////////////////////////
// A brief introduction to command line
// all the build tools that are available on NPM only work in the command line
// terminal in vs code or command prompt
// we are always in folders when we initialize terminal
// dir (directory): show the content of the current folder
/* 
cd: change directory: we can go up/down in the file tree
cd .. we go up
cd + tabkey to autocomplete the directory that you started to write and the part of the string is already unique
clear clear the console
mkdir + name => create a folder (stands for make directory)
New-item + name.extension => create some file 
up => last command typped
live-server
control + c => stop
del => delete
mv file location => move
rmdir folder => remove folder
*/

////////////////////////////////////
// Introduction to NPM (node package manager)
// manage our dependencies in a better and modern way
// npm -v check if it is installed and its version
// nodejs.org/en/
// npm init => package.json
// npm install name of the package => creates a dependencie in the package-json and a folder called node_modules
// lodash: a modern js utility library 
// npm i lodash-es
// importing from lodash
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    {product: 'bread', quantity: 5},
    {product: 'pizza', quantity: 5}
  ],
  user: {loggedIn: true}, 
} 

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone); // loggedIn is equal false and not true
// in order to create a deep clone:
console.log(stateDeepClone); // it is still true even though we changed it in the original object
// if we share our project with someone else we should NEVER EVER include de node_modules
// but if this happened, I have to implement even via npm all the nodule modules again one by one? that's why package.json exists...
// all we have to do is npm install without any package name

////////////////////////////////////
// bundling with parcel and npm scripts
// parcel is a bundler that works outside the box, without any configuration
// npm i parcel --save-dev
// devDependencie
// npx parcel index.html (where our script.js is)
/* 
for parcel, we dont have to mention type=module in script tag, what is a good thing, because modules do not work in old browsers
it creates a new folder called dist, which is destinated to production

if(module.hot){
  module.hot.accept()
}
this mantains the state even modifications are made in the code, without refreshing the browser

we actually execute parcel by npm scripts:
inside package.json:
"scripts": {
  "start": "parcel index.html"
}
after that we type on command line npm run start

"build": "parcel build index.html" => final build, compressed and with duplicated code erased

npm i parcel -g : install globally and use it in every directory of our computer - not recommended
*/

////////////////////////////////////
// configuring babel and polyfilling

// transpille our code to ES5 code
// we can use parcel to implement babel
// babel works with plugins and precets (a bunch of plugins bundled together)
// babel can only transpile es6 syntax, like arr functions
// for new features, such as promises and array methods eg, we can polyfilling them by importing this library:
// import 'core-js/stable' and install npm i core-js
// import 'core-js/stable/array/find' especifically to reduce the size of the bundle, but we usually dont do it
// npm i regenerator-runtime and import 'regenerator-runtime/runtime' - we have to import this separatelly for pollyfilling async functions

////////////////////////////////////
// writing clean and modern js
// use descriptive variable names: what they CONTAIN
// use descriptive function names: what they DO
// generally functions should do ONLY ONE thing
// dont use more than 3 function parameters and use default parameters whenever possible
// consume promises with async/await for best readability; 
// whenever possible, run promises in parallel (Promises.all);
// handle errors and promise rejections
