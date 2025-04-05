'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = "🎉 Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

//input field => .value
document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value); */

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20; // state variable
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener('click', function() {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if(!guess) { // when there is no input
    displayMessage("⛔ No number!");

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    // whenever manipulating a style, always specified a string!
    document.querySelector(".number").style.width = '30rem';
  
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

  // when guess is wrong 
  } else if(guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("☠️ Game Over!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Coding Challenge #1
document.querySelector(".again").addEventListener('click', function() {
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random()*20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
})