'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// //console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let score = 20;
let highscore = 0;

let SecretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = SecretNumber;
console.log(SecretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess, typeof guess);

  let subs = Math.abs(guess - SecretNumber);

  //when there is no input!
  if (!guess) {
    document.querySelector('.message').textContent =
      'No number here⛔! Try Again!';
  }

  //when player wins!
  else if (guess == SecretNumber) {
    document.querySelector('.message').textContent =
      'Correct Number!🎆 You have won!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = SecretNumber;

    //setting highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //when input number is larger or lower and diff is quite low
  else if (subs <= 5) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Close call! Try Again!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lost the game, start again!';
      document.querySelector('.score').textContent = 0;
    }
  }

  //when input number is quite high!
  else if (guess + 5 < SecretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'You guess is too low! Try Again!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lost the game, start again!';
      document.querySelector('.score').textContent = 0;
    }
  }

  //when input number is quite high!
  else if (guess - 5 > SecretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Your guess is way too high! Try Again!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lost the game, start again!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//again button

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  SecretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '#15rem';
});
