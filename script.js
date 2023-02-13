'use strict';
/*****************************************Selecting and Manapulating Elements 
console.log(document.querySelector(`.message`).textContent);
document.querySelector(`.message`).textContent = `Amaan 🥳`;
console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.number`).textContent = 13;

document.querySelector(`.score`).textContent = 10;

console.log(document.querySelector(`.guess`).value);
document.querySelector(`.guess`).value = 23;
*/
/**********************************Handling Click Events********************************************/
/**********************************Implementing Game Logic******************************************/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.again`).addEventListener(`click`, function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1; // for resseting secret number
  score = 20; // assigning max score

  displayMessage(`Start guessing...`);
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = null;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`body`).style.backgroundColor = `#222`;
});

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess);
  if (!guess) {
    displayMessage(`⛔ No number!`);
  }
  // when there is no input
  else if (guess === secretNumber) {
    displayMessage(`🥳 Correct Number`);

    document.querySelector(`.number`).textContent = secretNumber;

    document.querySelector(`body`).style.backgroundColor = `#60b347`;

    document.querySelector(`.number`).style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }
  }

  //when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `📈Too High` : `📉Too low`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      displayMessage(`You lost the game!💥`);
      document.querySelector(`.score`).textContent = 0;
    }
  }
});
