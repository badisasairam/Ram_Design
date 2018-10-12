var randNumber = Math.floor(Math.random() * 50) + 1;
var guesses = document.querySelector('.guesses');
var lResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
var gSubmit = document.querySelector('.guessSubmit');
var gField = document.querySelector('.guessField');
var gCount = 1;
var resetButton;
gField.focus();



function checkGuess() {
  var uGuess = Number(gField.value);
  if (gCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += uGuess + ' ';
  
  if (uGuess === randNumber) {
    lResult.textContent = 'Congratulations! You guessed correctly!';
    lResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (gCount === 10) {
    lResult.textContent = 'GAME OVER';
    lResult.style.backgroundColor = 'red';
    setGameOver();
  } else {
    lResult.textContent = 'Wrong, try again!';
    lResult.style.backgroundColor = '#f24000';
    if (uGuess < randNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if (uGuess > randNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }
  
  gCount++;
  gField.value = '';
  gField.focus();
}

gSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  gField.disabled = true;
  gSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  resetButton.setAttribute('class', 'reset');
  document.getElementById('reset').appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  gCount = 1;
  
  var resetParas = document.querySelectorAll('.resultParas p');
  for (var i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = '';
  }
  
  resetButton.parentNode.removeChild(resetButton);
  
  gField.disabled = false;
  gSubmit.disabled = false;
  gField.value = '';
  gField.focus();
  
  lResult.style.backgroundColor = 'white';
  
  randNumber = Math.floor(Math.random() * 100) + 1;
}