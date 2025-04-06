'use strict';

// we use the functionality of adding/removing classes to modify the website elements all the time

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
// querySelector => only the first element in case of multiple elements gets selected
const btnsOpenModal = document.querySelectorAll(".show-modal");
// console.log(btnsOpenModal); 

const openModal = function() {
  modal.classList.remove('hidden'); //the dot is only for the selector
  overlay.classList.remove("hidden");
}

const closeModal = function() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal); // without (), otherwise the function will be executed regardless the click or not



