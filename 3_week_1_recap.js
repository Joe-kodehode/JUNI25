// Lesson 3: Recap of JavaScript Basics with New Examples

// ------------------------------
// Section 1: Variables, Data Types, and Operators
// ------------------------------

// Scenario: An online store managing product details.

const storeName = "Tech Haven"; // String
const productName = "Wireless Earbuds"; // String
let productPrice = 75; // Number (Integer)
let productQuantity = 15; // Integer
let isInStock = true; // Boolean
let productTags = ["audio", "wireless", "accessory"]; // Array
let discount; // Undefined

discount = true;

// Console.log to display variable values
console.log(storeName);
console.log(productName);
console.log(productPrice);
console.log(productQuantity);
console.log(isInStock);
console.log(productTags);
console.log(discount);

console.log(productTags[2]);

// Calculate the total cost for the available quantity.

productQuantity++;

const totalValue = productPrice * productQuantity;

console.log(totalValue);

// Compound assignment: Increase the product price by 10.

productPrice += 10;
console.log(productPrice);

// productPrice = productPrice + 10

// Increment and decrement operators:
// Increase the quantity by 1.

productQuantity++;
productQuantity--;
console.log(productQuantity);

// Using the modulus operator:
// Find the remainder when total value is divided by 50.

console.log(totalValue);

const remainder = totalValue % 50;
console.log(remainder);

// ------------------------------
// Section 2: Conditionals and Logical Operators
// ------------------------------

// Example: Decide promotion messages based on total basket ammount.

const totalBasket = 400;

if (totalBasket >= 350) {
  console.log("You qualify for free delivery!");
} else if (totalBasket >= 300) {
  console.log("You're close to free delivery, spend 350 or more to qualify!");
} else {
  console.log("Free delivery with orders of 350 or more.");
}

// Logical operators: Using AND (&&) and OR (||)
// Scenario: Show a special message if the product is in stock and either it's on sale or the quantity is high.
// isInStock  is set to true
// discount   is set to true
// productQuantity is more than 20

if (isInStock && (discount || productQuantity > 20)) {
  console.log("Congratulations, you are eligible for a special offer");
}

// Ternary operator: Determine shipping cost based on total cost.

// if their totalBasket is over 350 they get free shipping, otherwise it's a 15 fee
const shippingCost = totalBasket >= 350 ? "free shipping" : "15 delivery fee";

console.log(shippingCost);

// ------------------------------
// Section 3: typeof Operator and Truthy/Falsey Values
// ------------------------------

// Using the typeof operator to check data types:
console.log(typeof storeName);
console.log(typeof productPrice);
console.log(typeof isInStock);
console.log(typeof productTags);

// Example with an empty string (falsey)
const emptyStr = "";
if (emptyStr) {
  console.log("Empty string is truthy.");
} else {
  console.log("An empty string is falsey.");
}

// Example with a non-empty string (truthy)
const greeting = "Welcome!";
if (greeting) {
  console.log("Greeting detected");
} else {
  console.log("No greeting detected");
}

// Example with the number 0 (falsey)
const zeroValue = 0;
if (zeroValue) {
  console.log("0 is truthy.");
} else {
  console.log("0 is falsey.");
}

// --------------------------------------------------
// Section 4: Template Literals Recap
//---------------------------------------------------

// const welcomeMessage =
//   "Welcome to" +
//   " " +
//   storeName +
//   " " +
//   "we hope you enjoy your stay, our current offer is on" +
//   " " +
//   productName;

const welcomeMessage = `Welcome to ${storeName}, we hope you enjoy your stay, our current offer is on ${productName}`;

console.log(welcomeMessage);
