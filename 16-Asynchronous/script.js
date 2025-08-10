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
/* const renderCountry = function (data, className = "") {
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
  countriesContainer.style.opacity = 1;
};
 */
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

/* const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  // countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`); //promise rejected!
    return response.json();
  });
};
 */
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
});
 */// two ways of handling:
// 1 - pass a second callback function in the then method (the first one will be called always that a promise is fullfilled) (fullfilled(), rejected())
// 2 - handle all erros by adding catch method at the end of the chain

///////////////////////////////////////
// Throwing errors manually
// fetch doesnt reject some cases, so we have to do it manually

/* const getCountryData = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v2/name/${country}`, "Country not found")
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error("No neighbour found");
      // Country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        "Country not found"
      );
    })
    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      console.error(`${err} 💣💣💣`);
      renderError(`Something went wrong 💣💣 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    }); */ // it will be called ALWAYS, no matters the promise be fullfilled or rejected, eg hidding a spine
//};

/* btn.addEventListener("click", function () {
  getCountryData("portugal");
}); */

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
/* console.log('Test start'); // call stack (because its not a callback function)
setTimeout(() => console.log('0 sec timer'), 0); // callback queue
Promise.resolve('Resolved promise 1').then(res => console.log(res)); // microtask queue

Promise.resolve('Resolved promise 2').then(res => {
  for(let i = 0; i< 100000; i++) {}
  console.log(res)
})

console.log('Test end'); */ // call stack (because its not a callback function)
// we cannot do high precision things using js timer

///////////////////////////////////////
// Building a simple promise
/* const lotteryPromise = new Promise(function (resolve, reject) {
  //executor
  console.log("Lotter draw is happening... 🔮");
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve("You win 💰");
    } else {
      reject(new Error("You lost your money 💩"));
    }
  }, 2000);
});

lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err)); */

// promisifying means to convert callback based asynchronous behavior to promise based
// Promisifying setTimeout
/* const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
.then(() => {
  console.log(`I waited for 2 seconds`);
  return wait(1);
})
.then(() => console.log('I waited for 1 second')) */

// creating a fullfilled ou rejected promise immediately - static method
//Promise.resolve('I did NOT have to wait').then(res => console.log(res))
//Promise.reject(new Error('Problem!')).catch(res => console.error(res))

///////////////////////////////////////
// Coding challenge #2
// Part 1
/* const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const newImg = document.createElement("img");
    newImg.src = imgPath;
    // resolve
    newImg.addEventListener("load", function () {
      document.querySelector(".images").append(newImg);
      resolve(newImg)
    });
    // reject
    newImg.addEventListener('error', function(){
      reject(new Error("Error loading the image 🧨"));
    })
  });
};

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// Part 2
let currentImg;

createImage("img/img-1.jpg")
.then(img => {
  currentImg = img;
  return wait(2);
})
.then(() => {
  currentImg.style.display = 'none';
  return createImage("img/img-2.jpg");
})
.then((img) => {
  currentImg = img;
  return wait(2)
})
.then(() => {
  currentImg.style.display = 'none'
})
.catch(err => console.error(err.message)); */

///////////////////////////////////////
// Consuming promises with async/await
/* const getPosition = function() {
  return new Promise(function(resolve, reject){
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
} */

// remember that there is callback hell and handle promises
/* const whereAmI = async function(country) {
  try 
  // Geolocation
  {const pos = await getPosition();
  const {latitude: lat, longitude: lng} = pos.coords;
  // Reverse geocoding
  const resGeo = await fetch('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}')
  if(!resGeo.ok) throw new Error("Problem getting location data")
  const dataGeo = await resGeo.json();
  // Country data
  const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.countryName.toLowerCase()}`); // it will stop the code execution of this function until the promise is fullfilled, but it looks now like normal synchronous code. We simply assign values to variables
  if(!res.ok) throw new Error('Problem getting country')
  const data = await res.json();
  renderCountry(data[0])} catch(err) {
    console.error(err)
    renderError(`🧨💣 ${err.message}`)

    // Reject promise returned from async function
    throw err;
  }
}
whereAmI() */


///////////////////////////////////////
// Error handling with try... catch
// remember that fetch() only gets rejected when user has no internet connection. in case of 403 or 404, the fetch promise doesnt reject and so we have to do it manually

///////////////////////////////////////
// Returning values from async functions
// async functiona always returns a promise. so if we explicitly return a value, this will become the fullfilled value of a promise
// if it is still an error in a async function, the promise that returns is still fullfilled and not rejected. to solve this we have to rethrow an error from reject an async function

///////////////////////////////////////
// Running promises in parallel
// Never work with an async function without try and catch...
/* const get3Countries = async function(c1, c2, c3) {
  try {
 */    /* const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`)
    const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`)
    const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`)
    console.log([data1.capital, data2.capital, data3.capital]);
 */
    
    // To run in parallel
    // helper function in the promise constructor - a static method
/*     
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ])
    console.log(data.map(d => d[0].capital));

  } catch(err) {
    console.error(err);
  }
}

get3Countries('portugal', 'canada', 'tanzania') */
// this doesnt make much sense, because we are running interdependents functions one after other instead of in parallel. why should data2 await for data1 to end? so instead of running them in sequence we can ran in parallel to save valuable loading time. however when 1 promise rejects, the whole promise.all() rejects as well

///////////////////////////////////////
// Coding challenge #3
// Part 1
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const newImg = document.createElement("img");
    newImg.src = imgPath;
    // resolve
    newImg.addEventListener("load", function () {
      document.querySelector(".images").append(newImg);
      resolve(newImg)
    });
    // reject
    newImg.addEventListener('error', function(){
      reject(new Error("Error loading the image 🧨"));
    })
  });
};

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
// let currentImg;

/* createImage("img/img-1.jpg")
.then(img => {
  currentImg = img;
  return wait(2);
})
.then(() => {
  currentImg.style.display = 'none';
  return createImage("img/img-2.jpg");
})
.then((img) => {
  currentImg = img;
  return wait(2)
})
.then(() => {
  currentImg.style.display = 'none'
})
.catch(err => console.error(err.message));
 */


const loadNPause = async function(){
  try {
    let currentImg = await createImage('img/img-1.jpg');    
    await wait(2);
    currentImg.style.display = 'none'
    currentImg = await createImage("img/img-2.jpg")
    await wait(2);
    currentImg.style.display = 'none';  
  } catch(err) {
    console.error(err);
  }
}

// loadNPause();

// Part 2
const loadAll = async function(imgArr){
  try {
    const imgs = await Promise.all(imgArr.map(img => createImage(img))) 
    console.log(imgs)
    imgs.forEach(img => img.classList.add('parallel'))

  } catch (err) {
    console.error(err);
  }
}

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'])
