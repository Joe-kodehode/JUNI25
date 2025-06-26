// Variables & Operators

// --------------------------------------
// Section 1: Commenting our code
// --------------------------------------

// ctrl + *  =  comment out one line

// Multi-line comments   shift + alt + A
/* 
asdfasdf
asdfasdfasdfasd
asdfasdf 
 */

// --------------------------------------
// Section 2: console log
// --------------------------------------

console.log("hello world");

// --------------------------------------
// Section 3: Variables and Data Types
// --------------------------------------

// Variables store data values. Here we'll see different types of data.

// camelCase
// this is when we write the first word's letter in lowercase and subsequent first letters of words in upper case. it's used for naming variables in JavaScript.

//String (text)
const exampleText = "my text";
console.log(exampleText);

// Integer (number)
const myNum = 5;
console.log(myNum);

// Boolean (true or false)
const booleanOne = true;
const booleanTwo = false;

console.log(booleanOne);
console.log(booleanTwo);

// Array (list of values)
// index is the position of the data in the array, index starts from 0

exampleArray = [true, 100, "hello"];

console.log(exampleArray);
console.log(exampleArray[1]);

// Object (key value pairs)

const person = {
  name: "Joe",
  age: 37,
  address: "homeless",
};

console.log(person);

// Undefined
let undefinedExample;
console.log(undefinedExample);

// Null
nullExample = null;
console.log(nullExample);

// --------------------------------------
// Section 4: Declaring variables - Let and Const
// --------------------------------------

let changeableString = "I can change!";
console.log(changeableString);

changeableString = "I've changed!";
console.log(changeableString);

const fixedString = "I cannot be redeclared!";
console.log(fixedString);

// fixedString = "Attempting to change...";
// console.log(fixedString);

let healthPoints = 100;
console.log(healthPoints);

healthPoints = 50;
console.log(healthPoints);

// Note: When you declare a variable with const, you can't reassign or redeclare it in the same scope. However, if the constant holds a mutable object (like an array or an object), the properties or elements of that object can be changed.

const myArray = [100, 5, 25];
console.log(myArray);
myArray[1] = 400;
console.log(myArray);

// --------------------------------------
// Section 5: Basic Operators
// --------------------------------------

let num1 = 10;
let num2 = 5;

console.log(num1, num2);

console.log(num1 + num2); // Addition: 15
console.log(num1 - num2); // Subtraction: 5
console.log(num1 * num2); // Multiplication: 50
console.log(num1 / num2); // Division: 2
console.log(num1 % num2); // Modulus (remainder): 0

// Using the + operator with strings to concatenate them:
let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;
// let fullName = "John" + " " + "Doe";

console.log(fullName);

let counter = 0;
console.log(counter);
// Increment operator (++) increases a number by 1:
counter++;
counter++;
counter++;
console.log(counter);

// Decrement operator (--) decreases a number by 1:
counter--;
console.log(counter);

counter = counter + 5;
console.log(counter);

// Same as above but saves code, do this shorthand.
counter += 5;
console.log(counter);

let score = 10;

//Subtraction assignment (-=)
score -= 3;
console.log(score);

//Multiplication assignment (*=)
score *= 2;
console.log(score);

//Division assignment (/=)
score /= 4;
console.log(score);

//Remainder assignment (%=)
score %= 3;
console.log(score);
