'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = "🎉 Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

//input field => .value
document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value); */

const secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20; // state variable

document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener('click', function() {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if(!guess) { // when there is no input
    document.querySelector(".message").textContent = "⛔ No number!";

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = "🎉 Correct Number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    // whenever manipulating a style, always specified a string!
    document.querySelector(".number").style.width = '30rem';
  
  // when guess is too high 
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = '📈 Too high!';
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "☠️ Game Over!";
      document.querySelector(".score").textContent = 0;
    }
  
  // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = '📉 Too low!';
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "☠️ Game Over!";
      document.querySelector(".score").textContent = 0;
    }
  }

});