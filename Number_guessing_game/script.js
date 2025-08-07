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

  restartButton.style.display = "none";

  guessInput.value = "";
}

// stretch goal: run checkGuess function when hitting enter key as well as when clicking guess button

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

  //Update the feedback paragraph to say either "Too high" "Too low" "You're close!" (if within 5)
  if (Math.abs(userGuess - randomNumber) <= 5) {
    feedback.textContent = "You are getting quite close!";
  } else {
    feedback.textContent =
      userGuess < randomNumber ? "Guess is too low!" : "Guess is too high!";
  }

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
