"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// API URL CHANGE
// https://countries-api-836d.onrender.com/countries/

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////
// Our first AJAX Call
// Old school way
/* const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v2/name/${country}`);
  request.send();
  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const html = `
    <article class="country">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          Number(data.population) / 1000000
        ).toFixed(1)}M people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
      </article>
  `;
    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
}; */
// running in parallel, we cannot control which one is completed first
/* getCountryData('canada');
getCountryData('italy');
getCountryData('brazil'); */

///////////////////////////////////////
// Wellcome to callback hell
const renderCountry = function (data, className = "") {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          Number(data.population) / 1000000
        ).toFixed(1)}M people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
      </article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  // countriesContainer.style.opacity = 1;
};

/* const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v2/name/${country}`);
  request.send();
  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    
    // Render country 1
    renderCountry(data);
    
    // Get neighbour country
    const neighbour = data.borders?.[0];
    // AJAX call neighbour country
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();
    
    request2.addEventListener('load', function(){
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour')
    })
  });
};
 */ // callback hell: nested callbacks in order to execute asynchronous tasks in sequence
// callback hell makes our code messy and hard to mantain and very difficult to understand and reason about it
// getCountryAndNeighbour('portugal')

///////////////////////////////////////
// Promises and the fetch API
// const request = fetch(`https://restcountries.com/v2/name/portugal`);
// console.log(request); // promise: a container (object) for an asynchronous (future) delivered value - eg response from AJAX call

// Consuming promises
/* const getCountryData = function(country) {
  fetch(`https://restcountries.com/v2/name/${country}`).then(function(response){
    return response.json() //json() also returns a promise
  }).then(function(data){
    renderCountry(data[0])
  })
} */

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  // countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`); //promise rejected!
    return response.json();
  });
};

/* const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v2/name/${country}`, { cache: "no-store" })
    .then((response) => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`); //promise rejected!
      return response.json();
    })
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      // Country 2 - always return the function and continue the chain outside to avoid callback hell
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then((response) => response.json())
    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      console.error(`${err} 💣💣💣`);
      renderError(`Something went wrong 💣💣 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    }); // it will be called ALWAYS, no matters the promise be fullfilled or rejected, eg hidding a spine
};
 */

///////////////////////////////////////
// Handling rejected promises
/* btn.addEventListener("click", function () {
  getCountryData("portugal");
}); */
// two ways of handling:
// 1 - pass a second callback function in the then method (the first one will be called always that a promise is fullfilled) (fullfilled(), rejected())
// 2 - handle all erros by adding catch method at the end of the chain

///////////////////////////////////////
// Throwing errors manually
// fetch doesnt reject some cases, so we have to do it manually

const getCountryData = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v2/name/${country}`, "Country not found")
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error('No neighbour found')
      // Country 2
      return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`, 'Country not found')
    })
    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      console.error(`${err} 💣💣💣`);
      renderError(`Something went wrong 💣💣 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    }); // it will be called ALWAYS, no matters the promise be fullfilled or rejected, eg hidding a spine
};

btn.addEventListener("click", function () {
  getCountryData("portugal");
});


///////////////////////////////////////
// Code challenge #1
// API url: http://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}$longitude=${}

/* const whereamI = function(lat, long, errorMsg='Something went wrong'){
  fetch(`http://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}`, {cache: "no-store"})
  .then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`)
    return response.json()
  })
  .then(data => {
    console.log(data)
    console.log(`You are in ${data.locality}, ${data.countryName}`);
    getCountryData(`${data.countryName.toLowerCase()}`)
  })
  .catch(err => console.error(` 🧨🧨 ${err.message}. Try again`))  
}

whereamI(-33.933, 18.474); */

///////////////////////////////////////
// How asynchronous js works behind the scenes
// How can asynchronous code be executed in a non-blocking way, if there is only one thread of execution in the engine?
// Web api: where asynchronous tasks run;
// after the event is listened, the callback functions go to callback queue, to the end of the line
// event loop: look if the call stack is empty or no (exception the global execution context) and if no code is being executed, then it takes the first callback in the callback queue and put it into the call stack to be executed - EVENT LOOP TIC
// event loop: decides when each callback is executed: orchestration
// callbacks related to promises (eg then) actually do NOT go to callback queue. instead callbacks of promises have a special queue for themselves: microtasks queue. Has PRIORITY over callback queue.
// callbacks from promises is called microtasks

///////////////////////////////////////
// The event loop in practice
