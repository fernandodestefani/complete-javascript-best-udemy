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
/* const populations = [10, 1441, 332, 83];
const percentages3 = [];
const percentageOfWorld1 = function (population) {
  return (population / 7900) * 100; 
}
let i = 0;
while (i < populations.length) {
  percentages3[i] = percentageOfWorld1(populations[i]);
  i++;
}
console.log(percentages3); */

/////////////////////////////////////////////////////////////////////////////////////
// DATA SCTRUCTURES, MODERN OPERATORS AND STRING
const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13
      }
    },
    highlighted: true
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0
      }
    },
    highlighted: true
  },
  {
    title: 'Computer Systems: A Programmer\'s Perspective',
    author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16
      }
    },
    highlighted: true
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65
      }
    }
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6
      }
    },
    highlighted: true
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090
      }
    }
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0
      }
    }
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808
      }
    },
    highlighted: true
  }
];
// Destructuring Arrays
// 1.1
const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);

// 1.2
const [, , thirdBook] = books;
// console.log(thirdBook);

// 1.3
const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

// 1.4
const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings=0] = ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// Destructuring Objects
// 2.1
// const {title, author, ISBN} = books[0];
// console.log(title, author, ISBN);

// 2.2
/* const {keywords: tags} = books[0];
console.log(tags);

// 2.3
const {language, programmingLanguage = 'unknown'} = books[6];
console.log(language, programmingLanguage);

// 2.4
let bookTitle = 'unknown';
let bookAuthor = 'unknown';
({title: bookTitle, author: bookAuthor} = books[0])
console.log(bookTitle, bookAuthor);

// 2.5
const {thirdParty: {goodreads: {rating: bookRating}}} = books[0];
console.log(bookRating);

// 2.6
const printBookInfo = function({title, author, year='year unknown'}) {
  console.log(`${title} by ${author}, ${year}`);
};

printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick', year: '2011' });

// Spread Operator
// 3.1
const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors);

// 3.2
const spellWord = function(str) {
  console.log(...str);
};

spellWord("JavaScript");
 */

// Rest pattern and Parameters
// 4.1
/* const [mainkeyword, ...rest] = books[0].keywords;
console.log(mainkeyword, rest);
 */
// 4.2
/* const {publisher: bookPublisher, ...restOfTheBook} = books[1];
console.log(bookPublisher);
 */
// 4.3
/* const printBookAuthorsCount = function(title, ...authors) {
  console.log(`The book "${title}" has ${authors.length} authors`);
};

printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne'); */

//5.1
/* const hasExamplesInJava = function (book) {
  return book.programmingLanguage === "Java" || 'no data available';
};

hasExamplesInJava(books[1]);
 */
//5.2
/* for (let i = 0; i < books.length; i++) {
  books[i].onlineContent && console.log(`${books[i].title} provides online content`);
} */

// The Nullish Coalescing Operator ??
for (let i = 0; i < books.length; i++) {
  books[i].onlineContent ?? console.log(`"${books[i].title}" provides NO data about its online content.`);
}