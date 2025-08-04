// --------------------------------------
// Section 1: Check if a list includes an item (function, ternary, array)
// --------------------------------------

const shoppingList = ["milk", "bread", "cheese"];
const gamesList = ["mario kart", "GTA6", "hello kitty island adventure"];

const checkItem = (item, itemArray) =>
  `The array does${itemArray.includes(item) ? "" : "n't"} include ${item}`;

console.log(checkItem("dogfood", shoppingList));
console.log(checkItem("milk", shoppingList));
console.log(checkItem("mario kart", gamesList));
console.log(checkItem("warframe", gamesList));
console.log(checkItem("sims", gamesList));

// --------------------------------------
// Section 2: Convert a Sentence into Kebab Case (function, methods)
// --------------------------------------

function toKebabCase(string) {
  //   return string.trim().replaceAll(" ", "-");
  return string.trim().split(" ").join("-");
}

console.log(toKebabCase("  hello javascript how are you     "));

// result:  "hello-javascript-how-are-you"

// --------------------------------------
// Section 3: Checking if a word is a palindrome (function, conditional, methods)
// --------------------------------------

function isPalindrome(word) {
  const reversedWord = word.toLowerCase().split("").toReversed().join("");
  return `${word} is ${
    word.toLowerCase() === reversedWord ? "" : "not"
  } a palindrome`;
}

console.log(isPalindrome("Racecar")); // racecar is a palindrome
console.log(isPalindrome("Banana")); // banana is not a palindrome

// Break until 13:15

// How can we return a fully lowercase word but with an uppercase first letter?

function uppercaseFirstLetter(word) {
  const trimmedWord = word.trim();
  return (
    trimmedWord.charAt(0).toUpperCase() + trimmedWord.slice(1).toLowerCase()
  );
}

console.log(uppercaseFirstLetter("smoothie")); // Smoothie
console.log(uppercaseFirstLetter("    buIlDinG    ")); // Building

// --------------------------------------
// Section 4: Introduction to Math.random
// --------------------------------------
const pokemon = [
  "pikachu",
  "diglett",
  "electrode",
  "machop",
  "magikarp",
  "blastoise",
  "vaporeon",
  "psyduck",
];

// Math.random() is a built-in JavaScript method that gives you a random number between 0 (inclusive) and 1 (exclusive).
// 0.0000000000000000 - 0.9999999999999999

console.log(Math.random());

// 0-9

const randomNumber = Math.floor(Math.random() * pokemon.length);
console.log(randomNumber);

// If you want a number between 1-10, simply add "+1"
const randomOneToTen = Math.floor(Math.random() * 10) + 1;
console.log(randomOneToTen);

console.log(`Your starter pokemon is: ${pokemon[randomNumber]}`);

// --------------------------------------
// Section 5: Remove the Middle Element from an Array (function, methods, Math.floor)
// --------------------------------------

const myArray = ["A", "B", "C", "D", "E"];

function removeMiddle(array) {
  const mid = Math.floor(array.length / 2);
  const copy = array.toSpliced(mid, 1);
  return copy;
}

console.log(removeMiddle(myArray));
console.log(removeMiddle(pokemon));

// --------------------------------------
// Section 6: Rock, paper scissors (function, switch case, Math.random)
// --------------------------------------

function rockPaperScissors(userInput, aiInput) {
  switch (userInput + aiInput) {
    case "rock" + "rock":
    case "paper" + "paper":
    case "scissors" + "scissors":
      return "It's a draw!";
    case "rock" + "scissors":
    case "scissors" + "paper":
    case "paper" + "rock":
      return "User wins!";
    default:
      return "AI Wins!";
  }
}

const possibleAnswers = ["rock", "paper", "scissors"];

// const randomNum = Math.floor(Math.random() * 3);
const randomNum = Math.floor(Math.random() * possibleAnswers.length);

const aiAnswer = possibleAnswers[randomNum];

console.log(rockPaperScissors("rock", aiAnswer));
