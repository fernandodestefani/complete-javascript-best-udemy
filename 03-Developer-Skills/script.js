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

/* const calcTempAmplitudeNew = function (t1, t2) {
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
 */
/* const amplitudeNew = calcTempAmplitudeNew();
console.log(amplitudeNew);
 */
/* const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2); */

// debugging process of finding, fixing and preventing bugs

/* const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: prompt('Degrees celsius:')
    // the prompt function always returns a string
  }
  console.log(measurement);

  // console.table()
  // console.warn()
  // console.error()

  const kelvin = measurement.value + 273;
  return kelvin;
}

// A) identify
console.log(measureKelvin());
 */
// debugger in google => inspect => sources 
// select the script
// insert breakpoints on the lines and reload the page
// it's possible to add debugger; in the code in order to open the debugger tools as soon as reloading the page. it works as a breakpoint

// CHALLENGE #1
/* const printForecast = function (arr) {
  // percorrer o array
  let string = "";
  for (let i = 0; i < arr.length; i++) {
    string += `... ${arr[i]}ºC in ${i+1} days `
  }
  return string;
  // criar uma variável que armazena uma string 
  // detectar o valor e a posição do vetor
}

console.log(printForecast([17, 21, 23])); */

//AI Tools

//CHALLENGE #2
const workHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];

const workHoursData = function (arr) {
  let max = arr[0];
  let sum = 0;
  let workDays = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (max < arr[i]) max = arr[i];
    if (arr[i] !== 0) workDays += 1;
  }
  
  console.log(`
    1. Total hours worked: ${sum}
    2. Average daily hours: ${sum/arr.length}
    3. The day with the most hours worked: ${arr.indexOf(max)}
    4. Number of days worked: ${workDays}
    5. Wheter the week was full-time: ${sum >= 35 ? true : false}
    `);
}

workHoursData(workHours);