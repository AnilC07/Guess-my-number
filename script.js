'use strict';

let guess = document.querySelector('.guess');
let number = document.querySelector('.number');
let message = document.querySelector('.message');
let check = document.querySelector('.check');
let body = document.querySelector('body');
let score = document.querySelector('.score');
let highScore = document.querySelector('.highscore');

let currentScore = 20;
let currentHighScore = 0;
let randomNumber = Math.floor(Math.random() * 20 + 1);

// Au lancement d'une nouvelle partie
document.querySelector('.again').addEventListener('click', e => {
  currentScore = 20;
  number.textContent = '?';
  score.textContent = currentScore;
  guess.value = '';
  message.textContent = 'Start guessing...';
  randomNumber = Math.floor(Math.random() * 20 + 1);
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
});

// Au click sur le bouton "check"
document.querySelector('.check').addEventListener('click', () => {
    // Conversion de l'entrée utilisateur en nombre
  const guess = Number(document.querySelector('.guess').value);

  // Lorque que le joueur a valider une entrée nulle
  if (!guess) {
    document.querySelector('.message').textContent = 'no number';

    // Lorsque le joueur a deviné le bon nombre
  } else if (guess === randomNumber) {
    message.textContent = 'YEAHHHH';
    highScore.textContent = currentHighScore;
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    number.textContent = randomNumber;
    if (currentScore > currentHighScore) {
      currentHighScore = currentScore;
      highScore.textContent = currentHighScore;
    }
    // Lorsque le joueur a vue trop grand
  } else if (guess > randomNumber) {
    if (currentScore > 1) {
      message.textContent = 'too high';
      score.textContent = --currentScore;
    } else {
      message.textContent = 'you loose the game';
      score.textContent = 0;
    }
    // Lorsque le joueur a vue trop petit
  } else if (guess < randomNumber) {
    if (currentScore > 1) {
      message.textContent = 'too low';
      score.textContent = --currentScore;
    } else {
      message.textContent = 'you loose the game';
      score.textContent = 0;
    }
  }
});
