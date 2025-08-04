// DOM Manipulation with JavaScript

// --------------------------------------
// Section 1: What is the DOM?
// --------------------------------------

// The DOM (Document Object Model) is how JavaScript interacts with HTML on a web page.
// It turns your HTML into a structure of objects you can access and change using JS.

// --------------------------------------
// Section 2: Targeting existing HTML Elements in JavaScript
// --------------------------------------

const button = document.getElementById("my-button"); // targets element with id="my-button"
console.log(button);

const heading = document.querySelector("h1"); // target the first h1 on the page
console.log(heading);

const listItems = document.querySelectorAll(".list-item");
// targets all li elements
console.log(listItems);

// --------------------------------------
// Section 3: Changing Text or HTML Content
// --------------------------------------

heading.textContent = "Welcome to the DOM Manipulation lesson!";

heading.innerHTML = "<span style='color:red'>DOM Manipulation</span>";

console.log(heading);

// ⚠️ Security Warning:
// Be careful when using innerHTML with content that comes from the user or an external source.
// As a general rule, always use textContent where possible.
// It can create a security risk called XSS (Cross-Site Scripting).
// Always use textContent if you're not intentionally adding HTML tags.

// --------------------------------------
// Section 4: Changing Styles
// --------------------------------------

heading.style.fontSize = "66px";
heading.style.color = "blue"; // being overwritten by inline styling
heading.style.textTransform = "uppercase";

// --------------------------------------
// Section 5: Creating and Adding Elements
// --------------------------------------

// Create a new <p> element
const newParagraph = document.createElement("p");

// Set text content
newParagraph.textContent = "This paragragraph was created using JS";

// Add a class so we can style using CSS
newParagraph.classList.add("created-paragraph");

// Style with JS
newParagraph.style.color = "green";

// Add the element to the end of the body
document.body.append(newParagraph);

// 📌 append vs appendChild:
// - appendChild() only accepts **DOM nodes** (elements)
// - append() can accept **DOM nodes OR text**, and also multiple things at once

// Creating an image lement and adding attributes

const newImage = document.createElement("img");

newImage.setAttribute(
  "src",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/320px-Red_Apple.jpg"
);

// newImage.src =
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/320px-Red_Apple.jpg";

newImage.alt = "A red apple";
newImage.width = 400;
document.body.append(newImage);

console.log(newImage);

// 📌 setAttribute vs classList.add:
// setAttribute("class", "one two") → sets or replaces all classes
// classList.add("extra") → adds a class without removing others

// adding a new element to the beginning of the body with prepend
const firstParagraph = document.createElement("p");
firstParagraph.textContent = "I was added to the top!";
firstParagraph.style.color = "purple";
document.body.prepend(firstParagraph);

//adding a new element to somewhere in the middle of the page with insertBefore
const midParagraph = document.createElement("p");
midParagraph.textContent = "I'm in the middle!";
midParagraph.style.color = "orange";

const target = document.querySelector("p:nth-of-type(2)");

document.body.insertBefore(midParagraph, target);

// 📌 Summary of placement methods:
// append() → adds to the end
// prepend() → adds to the beginning
// insertBefore(newNode, referenceNode) → inserts before a specific node

// 🧠 What is a DOM node?
// A DOM node is any single part of the document tree:
// - An element (like <p> or <div>)
// - A text node (plain text)
// - A comment node (<!-- like this -->)
// Most of the time, when you're working with elements, you're using element nodes.

//adding a new li to our already existing ul
const list = document.querySelector("ul");
const newItem = document.createElement("li");
newItem.textContent = "I was created using JavaScript!";
list.append(newItem);

// --------------------------------------
// Section 6: Removing Elements
// --------------------------------------

const firstListItem = document.querySelector("li");

list.removeChild(firstListItem);

// --------------------------------------
// Section 7: Parent and Child Relationships
// --------------------------------------

// You can move between elements in the DOM using parent/child/sibling relationships

console.log(list.parentElement);
console.log(list.children);
console.log(list.firstElementChild);
console.log(list.lastElementChild);

// --------------------------------------
// Section 8: classList Methods
// --------------------------------------

const box = document.querySelector(".box");

//add a class
box.classList.add("active");

//remove a class
box.classList.remove("hidden");

//Toggle a class (adds if not found, removes if found)
box.classList.toggle("darkmode");
box.classList.toggle("lightmode");

//check if an element has a specific class
console.log(box.classList.contains("highlight"));

// --------------------------------------
// Section 9: Creating a List in a Loop
// --------------------------------------

// Let's create a list of favorite movies and display them on the page

const favoriteMovies = [
  "The Matrix",
  "Shrek",
  "Interstellar",
  "Kill buljo",
  "Donnie Darko",
  "Pulp Fiction",
  "Hitchhikers guide",
  "Fear and lothing in las vegas",
  "Night of the Day of the Dawn of the Son of the Bride of the Return of the Revenge of the Terror of the Attack of the Evil, Mutant, Hellbound, Flesh-Eating Subhumanoid Zombified Living Dead, Part 3",
];

// Create a heading
const movieHeading = document.createElement("h2");
movieHeading.textContent = "My Favorite Movies";
movieHeading.classList.add("section-heading");
document.body.append(movieHeading);

//Create the ul
const movieList = document.createElement("ul");
movieList.classList.add("movie-list");
document.body.append(movieList);

// Loop through the array and create an <li> for each movie

// for (let i = 0; i < favoriteMovies.length; i++) {
//   const listItem = document.createElement("li");
//   listItem.classList.add("movie");
//   listItem.textContent = favoriteMovies[i];
//   movieList.append(listItem);
// }

for (movie of favoriteMovies) {
  const listItem = document.createElement("li");
  listItem.classList.add("movie");
  listItem.textContent = movie;
  movieList.append(listItem);
}

// --------------------------------------
// Summary
// --------------------------------------

// ✅ The DOM is how JavaScript connects to HTML
// ✅ Use querySelector, getElementById, etc. to select elements
// ✅ Use .textContent, .innerHTML, and .style to change content and appearance
// ✅ Use createElement + appendChild to add elements
// ✅ Use removeChild to delete elements
// ✅ DOM has a parent/child/sibling structure you can navigate
// ✅ classList helps manage CSS classes
// ✅ You can attach event listeners like click or mouseover
