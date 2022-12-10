'use strict';

//Creating a secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//When we click on button CHECK
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When no input
  if (!guess) {
    displayMessage('Enter a number in the field please');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct 👍');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //When secret number is higher
  } else if (guess !== secretNumber) {
    if (score > 18) {
      displayMessage(guess < secretNumber ? 'Take higher 🔼' : 'Take lower 🔽');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost 😭');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#ff0000';
      document.querySelector('.number').style.width = '30rem';
    }
  }
});

//When click on button AGAIN
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;

  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
