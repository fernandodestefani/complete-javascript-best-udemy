"use strict";
// Remember, we're gonna use strict mode in all scripts now!

// prettier - vs code extension that formats the code - install and define it as the default formatter - make the code consistent!
// I use auto save on
// Jonas suggests turning on 'Format on Save' to make Prettier format the code automatically upon saving
// Personally, I always have to press Shift + Alt + f to format the code
// User snippets => New Global Snippets file... 
// cl = console.log()
// console.log();
// TODO Highlight VIDEO

// live server - extension that promotes live reload of pages
// more professional way: install node.js and live server npm package
//nodejs.org
//terminal vs code => npm install live-server -g
// terminal => live-server

//using google, stackoverflow and MDN
//problem: calculate the temperature amplitude
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//1) understanding the problem
//2) breaking up into sub-problems
// how to ignore errors?
// find max value in temp array
// find min value in temp array
// subtract min from max and return it

/* const calcTempAmplitude = function (temps) {
  let min = temps[0];
  let max = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if(typeof curTemp !== 'number') continue;
    if(curTemp < min) min = curTemp;
    if(curTemp > max) max = curTemp;
  }
  console.log(min, max);
  return max - min;
}
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
 */

//problem 2:
// function should now receive 2 arrays of temps
// how to merge 2 arrays 

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);

  let min = temps[0];
  let max = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if(typeof curTemp !== 'number') continue;
    if(curTemp < min) min = curTemp;
    if(curTemp > max) max = curTemp;
  }
  console.log(min, max);
  return max - min;
}

/* const amplitudeNew = calcTempAmplitudeNew();
console.log(amplitudeNew);
 */
/* const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2); */

// debugging process of finding, fixing and preventing bugs
