// Lesson 7: JavaScript Loops

// A loop is a way to repeat code without writing it multiple times.

// --------------------------------------
// Section 1: Why We Use Loops
// --------------------------------------

const names = ["Tom", "Eric", "Jessica"];

// Without a loop (repeating yourself)
console.log(`Hei ${names[0]}`);
console.log(`Hei ${names[1]}`);
console.log(`Hei ${names[2]}`);

// With a loop (cleaner, scalable)
for (let i = 0; i < names.length; i++) {
  console.log(`Hei ${names[i]}`);
}

// DRY - Don't repeat yourself!

// --------------------------------------
// Section 2: The for Loop
// --------------------------------------

for (let i = 1; i <= 5; i++) {
  console.log(`Counting: ${i}`); // logs 1 to 5
}

const fruits = ["Apple", "Banana", "Cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); // logs each fruit
}

// --------------------------------------
// Section 3: Combining Loops with Functions and Methods
// --------------------------------------

// Creating a function with a loop to greet names in an array
function greetEveryone(nameArray) {
  for (let i = 0; i < nameArray.length; i++) {
    const name =
      nameArray[i].trim().charAt(0).toUpperCase() +
      nameArray[i].slice(1).toLowerCase();
    console.log(`Hello, ${name}!`);
  }
}

const people = ["alice", " BOB ", "charlie", "dEbBy"];
greetEveryone(people);

// Creating a function with a loop to combine elements in an array to a string

function makeSentenceWithLoop(wordsArray) {
  let sentence = "";
  for (let i = 0; i < wordsArray.length; i++) {
    sentence += wordsArray[i];
    if (i < wordsArray.length - 1) {
      sentence += " ";
    }
  }
  return sentence + ".";
}

console.log(makeSentenceWithLoop(["Loops", "are", "really", "useful"]));

// Some methods have an inbuilt loop!
function makeSentence(wordsArray) {
  return wordsArray.join(" ") + ".";
}

console.log(makeSentence(["Loops", "are", "really", "useful"]));

// --------------------------------------
// Section 4: The for...of Loop
// --------------------------------------

const colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(`Color: ${color}`);
}

// --------------------------------------
// Section 5: The while Loop
// --------------------------------------

let count = 1;

while (count <= 5) {
  console.log(`While count: ${count}`);
  count++;
}

// Guessing game with while loop
const secret = Math.ceil(Math.random() * 10);
let guess = 0;

while (guess !== secret) {
  guess++;
  console.log(`Guessing: ${guess}`);
  if (guess === secret) {
    console.log(`Correct! The secret number was ${guess}.`);
  }
}

// --------------------------------------
// Section 6: Creating Arrays with Loops
// --------------------------------------

function makeRandomArray(length, max) {
  const result = [];
  for (let i = 0; i < length; i++) {
    const rand = Math.ceil(Math.random() * max);
    result.push(rand);
  }
  return result;
}

const randomNumbers = makeRandomArray(10, 50);
console.log(randomNumbers);

// --------------------------------------
// Section 7: Finding the Biggest Number
// --------------------------------------

function findMax(array) {
  let biggest = 0;
  for (let num of array) {
    if (num > biggest) {
      biggest = num;
    }
  }
  return `The biggest number is ${biggest}`;
}

console.log(findMax(randomNumbers));

// --------------------------------------
// Section 8: Using break and continue
// --------------------------------------

const moreNames = [
  "Tom",
  "Eric",
  "Jessica",
  "Scott",
  "Anna",
  "Carl",
  "Elisabeth",
  "Benny",
  "Oliver",
  "Andy",
  "Jenny",
  "Ashley",
  "Erin",
  "Patrick",
];

// Skip "Andy"
for (let name of moreNames) {
  if (name === "Andy") {
    continue;
  }
  console.log(`Hi ${name}`);
}

// Stop when you reach "Andy"
for (let name of moreNames) {
  if (name === "Andy") {
    break;
  }
  console.log(`Hello ${name}`);
}

// --------------------------------------
// Section 9: Loop Practice Challenges
// --------------------------------------

// Challenge 1: Log even numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Challenge 2: Reverse an array using a loop
const reverseArray = (arr) => {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
};

console.log(reverseArray(["a", "b", "c", "d"])); // ["d", "c", "b", "a"]

// Challenge 3: Guessing game with a limited number of guesses
const secretNumber = Math.ceil(Math.random() * 10);
let guessCount = 0;
const maxGuesses = 5;
let guessed = false;

while (guessCount < maxGuesses && !guessed) {
  guessCount++;
  const guess = guessCount; // Simulated guess
  console.log(`Guess ${guessCount}: ${guess}`);
  if (guess === secretNumber) {
    console.log(`Correct! The number was ${guess}`);
    guessed = true;
  }
}
if (!guessed) {
  console.log(`Out of guesses! The number was ${secretNumber}`);
}

// --------------------------------------
// Summary
// --------------------------------------

// for        → best when using an index or counting
// for...of   → great for looping through array values
// while      → useful when you don’t know how many times to repeat
// break      → stops the loop early
// continue   → skips to the next loop cycle
