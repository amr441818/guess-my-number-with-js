'use strict';
// // to select element with his selector we can use doucument.querySelector('.class or #id')
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 congrat!'; // set value with text content
// console.log(document.querySelector('.message').textContent);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscoreScore = 0;
const numberName = document.querySelector('.number');
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ NO NUMBER';
  } else if (guess === secretNumber) {
    displayMessage('🎉 congrate');
    numberName.textContent = secretNumber;
    numberName.style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highscoreScore) {
      highscoreScore = score;
      document.querySelector('.highscore').textContent = highscoreScore;
      document.querySelector('.check').style.cursor = 'no-drop';
    }
    // document.querySelector('.highscore').textContent = score;
    // secretNumber = Math.trunc(Math.random() * 20) + 1;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈to height' : '📈to low';
      displayMessage(guess > secretNumber ? '📈to height' : '📈to low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = ' 😴 you lose the game';
      displayMessage(' 😴 you lose the game');

      document.querySelector('.score').textContent = 0;
    }
  }
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈to height';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lose the game';

  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈to low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lose the game';

  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.message').textContent = 'Start guessing...';
    numberName.textContent = '?';
    numberName.style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.score').textContent = score;
    // document.querySelector('.highscore').textContent = score;
    document.querySelector('.guess').value = '';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  });
  // if (!guess) {
  //   document.querySelector('.message').textContent = '⛔ NO NUMBER';
  // } else if (guess === secretNumber) {
  //   document.querySelector('.message').textContent = '🎉 congrate';
  // } else if (guess > secretNumber && score > 1) {
  //   document.querySelector('.message').textContent = '📈to height';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  // } else if (guess < secretNumber && score > 1) {
  //   document.querySelector('.message').textContent = '📉to low';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  // } else {
  //   document.querySelector('.message').textContent = 'you lose the game';

  //   document.querySelector('.score').textContent = 0;
  // }
  // console.log(score);
});
// document.querySelector('.check').onclick = function fun() {
//   score--;
//   console.log(score);
// };
// // score--;

// // if (score === 0) {
// //   // document.querySelector('.message').textContent = 'you lose the game ';
// //   console.log(score);
// // }
// console.log(score);
// // function incre(score) {
// //   score--;
// //   return score;
// // }
// // console.log(incre(score));

// // console.log(score);
