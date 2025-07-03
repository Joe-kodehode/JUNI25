// Lesson 5: JavaScript Methods (Strings, Arrays, and Numbers)

// A method in JavaScript is a built-in function that you use with a specific type of data, like strings or arrays. It lets you do something with that data—like change it, check it, copy or access part of it.

// --------------------------------------
// Section 1: String Methods
// --------------------------------------

const text = "     Hello, JavaScript World World!     ";

const trimmedText = text.trim(); // removes whitespace from both ends of the string

console.log(trimmedText.toUpperCase()); // converts the entire string to uppercase

console.log(trimmedText.toLowerCase()); // converts the entire string to lowercase

console.log(trimmedText.indexOf("World")); // returns the starting index of "JavaScript" in the string (only the first occourence)

const slicedText = trimmedText.slice(7, 17); // extracts characters from index 7 to 17, doesn't alter the original.
console.log(slicedText);
console.log(trimmedText);

console.log(trimmedText.replace("World", "Universe")); // replaces the first occurrence of "World" with "Universe"

console.log(trimmedText.replaceAll("World", "Universe")); // replaces all occurrences of "World" with "Universe"

console.log(trimmedText.charCodeAt(0)); // returns the Unicode value of the character at index 0

console.log(trimmedText.length); // returns the length of the string

console.log(trimmedText.split(" ")); // splits the string into an array of substrings by spaces

console.log(trimmedText.repeat(3)); // repeats the string 3 times

// --------------------------------------
// Section 1.2: Converting a String to a Number
// --------------------------------------

const numericString = "123.45xyz";

console.log(Number(numericString)); // converts entire string to a number; returns NaN if any part is invalid

console.log(parseInt(numericString)); // parses as an integer until an invalid character; returns 123

console.log(parseFloat(numericString)); // parses as a float until an invalid character; returns 123.45

// --------------------------------------
// Section 2: Array Methods
// --------------------------------------

const colors = ["Red", "Green", "Blue"];
console.log(colors.length); // returns the number of elements in the array

colors.push("Yellow"); // adds "Yellow" to the end of the array
console.log(colors);

const lastColor = colors.pop(); // removes and returns the last element in the array
console.log(lastColor);
console.log(colors);

console.log(colors.join(" ")); // joins array elements into a string separated by " "

console.log(colors.includes("Green")); // checks if "Green" is in the array; returns true or false

console.log(colors.shift()); // removes and returns the first element in the array

colors.unshift("Purple"); // adds "Purple" at the beginning of the array
console.log(colors);

const newColors = colors.toSpliced(1, 1, "Orange");

console.log(colors); // logs the original array (unchanged)
console.log(newColors); // logs the new array with the spliced changes

const unsortedArray = [3, 1, 4, 1, 5, 9];

const sortedArray = unsortedArray.toSorted(); // returns a new sorted array without modifying the original

console.log(unsortedArray); // logs the original unsorted array
console.log(sortedArray); // logs the new sorted array

const unsortedStringArray = ["c", "a", "b"];

const sortedStringArray = unsortedStringArray.toSorted().toReversed();
console.log(sortedStringArray);

console.log(sortedArray.at(0)); // accesses the first element using a positive index
console.log(sortedArray.at(-1)); // accesses the last element using a negative index

const reversedArray = sortedArray.toReversed(); // returns a new array with elements in reverse order

console.log(reversedArray); // logs the reversed array

// --------------------------------------
// Section 3: Number Methods
// --------------------------------------

let myNum = 5.949359;

console.log(myNum.toFixed(2)); // returns a string representing myNum rounded to 2 decimal places

console.log(myNum.toString()); // converts myNum to a string

console.log(myNum.toExponential()); // returns a string with myNum in exponential notation

// --------------------------------------
// Section 4: Chaining Methods Together
// --------------------------------------

// Example 1: Chaining string methods

const rawString = "    JavaScript is FUN!     ";

const processedString = rawString
  .trim()
  .replace("FUN", "AWESOME")
  .toLowerCase();

console.log(processedString);

// Example 2: Chaining Array and String methods

const words = ["Hello", "World"];
const stringFromArray = words.join(" ").toUpperCase();

console.log(stringFromArray);

// Example 3: Chaining Number and String methods

const chainedNum = myNum.toFixed(2).toString().repeat(2);

console.log(chainedNum);

// JSON - JavaScript Object Notation

// prettier-ignore
const jsonExample = `{
    "employees":[
  { "firstName":"John", "lastName":"Doe" },
  { "firstName":"Anna", "lastName":"Smith" },
  { "firstName":"Peter", "lastName":"Jones" }
]}`

const parsedJson = JSON.parse(jsonExample);

console.log(parsedJson);
