// Lesson 4: Functions in JavaScript

// A function is a block of code designed to do one specific task. It lets you write code once and reuse it, keeping your program clean and organized. However, the function won't do anything until you call it.

// ---------------------------------------------------
// Section 1: Function Declarations (aka function statements) and Hoisting
// ---------------------------------------------------

function sayHello() {
  console.log("Hello");
}

sayHello();

// ---------------------------------------------------
// Section 2: Arrow Functions (introduced in ES6, great for short, inline functions)
// ---------------------------------------------------

const arrowFunction = () => {
  console.log("Hello from the arrow function");
};

arrowFunction();

// ---------------------------------------------------
// Section 3: Return Statements and Scope
// ---------------------------------------------------

function one() {
  console.log("This function logs a message without returning a value");
}

one();

function two() {
  const myMessage = "This message is returned from the function";
  return myMessage;
}

console.log(two());

const myArray = [1, 2, 3];

function changeArray() {
  myArray[2] = 100;
}

changeArray();

console.log(myArray);

// ---------------------------------------------------
// Section 4: Functions with Parameters
// ---------------------------------------------------

// Example 1 - Hard coded function, only returns 3+4

function add() {
  return 3 + 4;
}
console.log(add());

// Example 2 - Soft coded function, reusable, dynamic
function subtract(num1, num2) {
  return num1 - num2;
}

console.log(subtract(3, 4));
// console.log(subtract(10, 5));
// console.log(subtract(345, 34));
// console.log(subtract(631, 1));
// console.log(subtract(4, 50));
// console.log(subtract(3, 45));

// Example 3 - A greeter function that uses parameters and template literals.

// const greeter = (time, name) => {
//   return "Good" + " " + time + " " + name;
// };

const greeter = (time, name) => {
  return `Good ${time} ${name}`;
};

console.log(greeter("Morning", "Joe"));
console.log(greeter("Evening", "Ole"));
console.log(greeter("Afternoon", "Bill"));
