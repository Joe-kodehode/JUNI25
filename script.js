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

const userData = {
  userName: "Joe",
  address: "123 wherever",
  tel: 49348349,
};

// console.log(userData["userName"]);
// console.log(userData.userName);
console.log(greeter("Morning", userData.userName));

// ---------------------------------------------------
// Section 5: Implicit Return in Arrow Functions
// ---------------------------------------------------

// const adder = (num1, num2) => {
//  const myVariable = "123"
//   return num1 + num2;
// };

const adder = (num1, num2) => num1 + num2;

console.log(adder(10, 5));

// ---------------------------------------------------
// Section 6: Calculator Function Using Switch Statement
// ---------------------------------------------------

function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;

    default:
      return "Invalid operator";
  }
}

console.log(calculator(10, 2, "%"));
console.log(calculator(10, 2, "+"));
console.log(calculator(10, 2, "-"));
console.log(calculator(10, 2, "*"));
console.log(calculator(10, 0, "/"));

// ---------------------------------------------------
// Section 7: Updating a Global Variable via a Function
// ---------------------------------------------------

// Example 1
let hp = 100;

const updateHp = (amount, direction) => {
  if (direction === "down") {
    hp -= amount;
  } else if (direction === "up") {
    hp += amount;
  }
};

updateHp(50, "down");
console.log(hp);

updateHp(25, "up");
console.log(hp);

//Example 2
const newArray = [];

function updateArray(data) {
  newArray.push(data);
}

updateArray(1);
updateArray(6);
updateArray(3);
updateArray(9);
console.log(newArray);

// ---------------------------------------------------
// Section 8: Using Template Literals and Ternary Operator in a Function
// ---------------------------------------------------

const fruits = ["Banana", "Apple", "Pear", "Kiwi"];

const drinks = ["coke", "water", "milk", "orange juice"];

//Code without implicit return
// const checkItem = (item, array) => {
//   return `The array ${
//     array.includes(item) ? "does" : "doesn't"
//   } include ${item}`;
// };

//Code with implicit return (no return or curly brackets as its all on one line)
const checkItem = (item, array) =>
  `The array ${array.includes(item) ? "does" : "doesn't"} include ${item}`;

console.log(checkItem("sprite", drinks));
