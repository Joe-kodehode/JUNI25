const fruits = [
  { name: "Apple", color: "Red", calories: 52, pricePerKg: 3.5, origin: "USA" },
  {
    name: "Banana",
    color: "Yellow",
    calories: 89,
    pricePerKg: 1.2,
    origin: "Ecuador",
  },
  {
    name: "Orange",
    color: "Orange",
    calories: 47,
    pricePerKg: 2.8,
    origin: "Spain",
  },
  {
    name: "Strawberry",
    color: "Red",
    calories: 32,
    pricePerKg: 6.0,
    origin: "Mexico",
  },
  {
    name: "Mango",
    color: "Orange",
    calories: 60,
    pricePerKg: 4.0,
    origin: "India",
  },
  {
    name: "Grapes",
    color: "Green",
    calories: 69,
    pricePerKg: 2.5,
    origin: "Italy",
  },
  {
    name: "Pineapple",
    color: "Brown",
    calories: 50,
    pricePerKg: 3.0,
    origin: "Costa Rica",
  },
];

// Create a container to hold fruit cards

const container = document.createElement("div");
container.classList.add("fruit-catalog");
document.body.append(container);

// Create a loop to loop through the fruits array and create a card for each fruit element

for (fruit of fruits) {
  const card = document.createElement("div");
  card.classList.add("fruit-card");

  //creating a new h2 for the title
  const title = document.createElement("h2");
  title.textContent = fruit.name;

  //creating a new image
  const image = document.createElement("img");
  image.src = `images/${fruit.name}.jpg`;
  image.classList.add("fruit-image");

  //creating p tag for fruit info
  const info = document.createElement("p");
  info.textContent = `color: ${fruit.color}, origin: ${fruit.origin}`;

  //adding nutritional info
  const nutrition = document.createElement("p");
  nutrition.textContent = `Calories: ${fruit.calories} per 100g`;

  //adding price per kg
  const price = document.createElement("p");
  price.textContent = `Price per kg: $${fruit.pricePerKg}`;

  //appending everything to the card
  card.append(title, image, info, nutrition, price);

  fruit.sale = Math.random() < 0.5;

  if (fruit.sale) {
    price.classList.add("strikethrough");

    const salePrice = document.createElement("p");
    salePrice.textContent = `Sale price: $${fruit.pricePerKg * 0.9} per kg.`;
    salePrice.classList.add("sale");

    card.append(salePrice);
  }

  //appending card to the container
  container.append(card);
}
