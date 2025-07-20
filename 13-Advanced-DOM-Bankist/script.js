'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

// Selecting Elements
// for only these three, we cannot need to select elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header'); // the first element with such class
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById("section--1"); // we dont need the selector # returns nodeList and dont update itself if an element is deleted
const allButtons = document.getElementsByTagName('button'); //collection - updates automatically
console.log(allButtons);

document.getElementsByClassName('btn'); //we dont need the selector and also returns a live html collection

// Creating and inserting elements
// .insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message')
// message.textContent = "We use cookies for improved functionality and analytics."
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie" >Got it!</button>'

// each dom element is really unique 
// header.prepend(message); // add the element as the first child
header.append(message) // the last child
// header.append(message.cloneNode(true))

/* header.before(message) // as siblings
header.after(message) */ 

// Delete elements
document.querySelector('.btn--close-cookie').addEventListener('click', function(){
  message.remove();
})

// Styles