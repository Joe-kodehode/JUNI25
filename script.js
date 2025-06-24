// Lesson 2: Conditionals and Related Operators in JavaScript

// --------------------------------------
// Section 1: The typeof Operator
// --------------------------------------

const myVariable = [1, 2, 3];

console.log(typeof myVariable);

// --------------------------------------
// Section 2: Comparison Operators
// --------------------------------------

console.log(15 > 20); // Greater than (>) operator
console.log(15 < 20); // Less than (<) operator
console.log(15 >= 15); // Greater than or equal to (>=) operator
console.log(20 <= 20); // Less than or equal to(<=)

// The equality (==) operator checks if values are equal (with type conversion):
console.log(15 == "15"); // true due to type coercion

// Strict equality (===) operator checks for both value and type:
console.log(15 === "15"); // false, because the types differ (number vs string)

console.log(15 != 20); // Not equal (!=) operator
console.log(15 != "15");

console.log(15 !== "15"); // Strict not equal (!==) operator

// --------------------------------------
// Section 2: Conditionals with if, if...else, if...else if...else
// --------------------------------------

// Basic "if statement"

let temperature = -5;

if (temperature >= 20) {
  console.log("It's a hot day!!");
} else if (temperature >= 10) {
  console.log("It's a mid day");
} else if (temperature > 0) {
  console.log("It's a cold day");
} else {
  console.log("It's freezing!!");
}

// --------------------------------------
// Section 3: Logical Operators: AND (&&) and OR (||)
// --------------------------------------

// AND (&&) requires both conditions to be true.

const age = 18;
const hasLicence = true;
const disqualified = false;

if (age >= 18 && hasLicence && !disqualified) {
  console.log("You can drive");
} else {
  console.log("You can't drive, sorry!");
}

// OR (||) requires at least one condition to be true.

const day = "Saturday";

if (day === "Saturday" || day === "Sunday") {
  console.log("It's the weekend, yipee!");
} else if (
  day === "Monday" ||
  day === "Tuesday" ||
  day === "Wednesday" ||
  day === "Thursday" ||
  day === "Friday"
) {
  console.log("It's a weekday");
} else {
  console.log("Please enter a day of the week.");
}

// --------------------------------------
// Section 4: Ternary Operator
// --------------------------------------

// DRY - Don't repeat yourself

const isMember = true;

const fee = `Your fee is: £${isMember ? "5" : "10"}`;

console.log(fee);

// if (isMember === true) {
//   console.log("You pay $5");
// } else {
//   console.log("You pay $10");
// }

// --------------------------------------
// Section 5: Switch Statement
// --------------------------------------

const fruit = "Kiwi";

switch (fruit) {
  case "Apple":
    console.log("Apples are delicious!");
    break;
  case "Banana":
    console.log("Bananas are a great source of energy");
    break;
  default:
    console.log("Unknown fruit detected");
}

// --------------------------------------
// Section 6: Truthy and Falsey Values
// --------------------------------------

// In JavaScript, some values are automatically considered "truthy" (true) or "falsey" (false) when used in conditions.

let test = {
  name: "Joe",
};

if (test) {
  console.log("is true");
} else {
  console.log("is false");
}

// String with contents is true
// Positive integer is true
// Negative integer is true
// Object with values is true
// Array with contents is true
// Object without value is true
// Empty array is true

// Undefined variable is false
// Null is false
// Zero is false
// Empty string is false

// --------------------------------------
// Section 6: Template literal // Template String
// --------------------------------------

const firstName = "Ola";
const lastName = "Nordmann";

const fullName = `Your full name is: ${firstName} ${lastName}`;
// const fullName = firstName + " " + lastName;

console.log(fullName);
