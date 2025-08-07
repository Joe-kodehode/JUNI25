let randomNumber, totalGuesses, guessedNumbers;

const guessInput = document.getElementById("guessInput");
const feedback = document.getElementById("feedback");
const guessesLeft = document.getElementById("guessesLeft");
const previousGuesses = document.getElementById("previousGuesses");
const restartButton = document.querySelector("#restartButton");
const guessButton = document.getElementById("guessButton");

initGame();

restartButton.addEventListener("click", initGame);

function initGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  totalGuesses = 10;
  guessedNumbers = [];

  guessesLeft.textContent = `Guesses Left: ${totalGuesses}`;

  feedback.textContent = "";
  previousGuesses.textContent = "";

  guessInput.disabled = false;
  guessButton.disabled = false;

  guessInput.value = "";
}

function checkGuess() {
  const userGuess = Number(guessInput.value);

  //record users previous guesses
  guessedNumbers.push(userGuess);

  previousGuesses.textContent = "Previous guesses:" + guessedNumbers.join(", ");

  //reduce guesses left
  totalGuesses--;
  console.log(totalGuesses);

  //update the totalGuesses paragraph to be one less
  guessesLeft.textContent = `Guesses left: ${totalGuesses}`;

  //check if user guessed correctly
  if (userGuess === randomNumber) {
    feedback.textContent = `Congratulations! You guessed correctly! The number was ${randomNumber}`;
    endGame();
    return;
  }

  if (totalGuesses === 0) {
    feedback.textContent = `Game over! You've got no more guesses left. The number was ${randomNumber}`;
    endGame();
  }
}

function endGame() {
  guessInput.disabled = true;
  guessButton.disabled = true;
  restartButton.style.display = "inline-block";
}
