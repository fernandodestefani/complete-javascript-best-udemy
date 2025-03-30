// PART 1

/* Values and Variables */
/* const country = "Brazil";
const continent = 'America';
let population = 200;
 */
/* console.log(country);
console.log(continent);
console.log(population);
 */

/* Data types */
/* const isIsland = false;
const language = 'Portuguese';
 */
/* console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
 */
// Data types
/* let halfPopulation = population/ 2;
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`
console.log(description);

*/
// if / else statements
/* if(population > 33) {
  console.log(`Brazil's population is ${population - 33} million above average`);
} else {
  console.log(`Brazil's population is ${33 - population} million bellow average`);
}

 */
// type conversion and coercion
/* // 4
// 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143
// 18
 */

// equality operators == vs ===
/* let numNeighbours = "1";
numNeighbours = Number(numNeighbours)

if(numNeighbours === 1) {
  console.log("Only 1 border")
} else if(numNeighbours > 1) {
  console.log("More than 1 border")
} else {
  console.log("No borders")
} */

// logical operators
/* if (language === "English" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`)
} else {
  console.log(`${country} does not meet your criteria :(`)
} */

// the switch statement
/* switch (language) {
  case "Chinese":
  case "Mandarim":
    console.log("MOST number of native speakers!");
    break
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break
  case "English":
    console.log("3rd place");
    break
  case "Hindi":
    console.log("Number 4");
    break;
  case "Arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}  */

// conditional (ternary) operator
/* console.log(`${country}'s population is ${population > 33 ? "above" : "under"} average.`); */

// PART 2
// Functions
/* function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}
const descFinland = describeCountry("Finland", 6, "Helsinki");
console.log(descFinland); */

// Function Declaration vs Expressions
/* function percentageOfWorld1(population) {
  return (population / 7900) * 100; 
}

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
}

// Arrow function
const percentageOfWorld3 = population => (population / 7900) * 100; */

// Functions calling other functions
/* const percentageOfWorld3 = population => (population / 7900) * 100;

function describePopulation(country, population) {
  const percentage = percentageOfWorld3(population);
  return `${country} has ${population} million of people, which is about ${percentage} of the world.`;
}

console.log(describePopulation("USA", 332)); */

// Introduction to Arrays
/* const percentageOfWorld3 = population => (population / 7900) * 100;
const population = [39, 223, 19.5, 117];
console.log(population.length === 4 ? true : false); //length is property not method
const percentages = [percentageOfWorld3(population[0]), percentageOfWorld3(223), percentageOfWorld3(19.5), percentageOfWorld3(117)];
console.log(percentages); */

// basic array operations (methods)
/* const neighbours = ["Chile", "Bolívia", "Paraguai", "Brasil", "Uruguai"]
neighbours.push("Utopia");
neighbours.pop();
if (neighbours.includes("Germany") === false) {
  console.log(`Probably not a central european country :D`)
}
const countryIndex = neighbours.indexOf("Brasil");
neighbours[countryIndex] = "Republic of Brasil";
console.log(neighbours); */

// introduction to objects
/* const myCountry = {
  country: "Argentina",
  capital: "Buenos Aires",
  language: "Spanish",
  population: 45,
  neighbours: ["Chile", "Bolívia", "Paraguai", "Brasil", "Uruguai"],
  checkIsland: function() {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
  describe: function() {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
  }
}
 */
// dot vs. bracket notation
/* myCountry.population += 2; 
myCountry["population"] -= 2; */


// object methods
/* console.log(myCountry.describe());
myCountry.checkIsland();
console.log(myCountry.isIsland);
console.log(myCountry) */

// the loop for
/* for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`)
} */

// looping arrays, breaking and continuing

/* const populations = [10, 1441, 332, 83];
const percentages3 = [];
const percentageOfWorld1 = function (population) {
  return (population / 7900) * 100; 
}
 */
/* for(i = 0; i < populations.length; i++) {
  percentages2[i] = percentageOfWorld1(populations[i]);
}
console.log(percentages2);
 */

// while loop
const populations = [10, 1441, 332, 83];
const percentages3 = [];
const percentageOfWorld1 = function (population) {
  return (population / 7900) * 100; 
}
let i = 0;
while (i < populations.length) {
  percentages3[i] = percentageOfWorld1(populations[i]);
  i++;
}
console.log(percentages3);