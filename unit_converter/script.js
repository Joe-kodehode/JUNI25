// Unit Converter

// First we declare our global-scope variables.
const fromUnit = document.querySelector("#from");
const toUnit = document.querySelector("#to");
const button = document.querySelector("#calculateBtn");
const input = document.querySelector("#userInput");
const resultText = document.querySelector("#result");

// Our convert function which will run when the user clicks the calculate button.

function convert() {
  // Variables which are only accessable in our function
  const inputValue = parseInt(input.value);
  const toUnitValue = toUnit.value;
  const fromUnitValue = fromUnit.value;
  let result;

  // Input validation to make sure the user is entering a number
  if (isNaN(inputValue)) {
    resultText.textContent = "Please enter a valid number.";
    return;
  }

  // Method one: use a switch statement to store all calculations.

  // Conditional to check which unit the user has selected for "to" and "from" dropdowns and what conversion to use based on the selections.

  // switch (fromUnitValue + "-" + toUnitValue) {
  //   case "meters-kilometers":
  //     result = inputValue / 1000;
  //     break;
  //   case "meters-miles":
  //     result = inputValue * 0.000621371;
  //     break;
  //   case "kilometers-meters":
  //     result = inputValue * 1000;
  //     break;
  //   case "kilometers-miles":
  //     result = inputValue * 0.621371;
  //     break;
  //   case "miles-meters":
  //     result = inputValue * 1609.34;
  //     break;
  //   case "miles-kilometers":
  //     result = inputValue * 1.60934;
  //     break;
  //   default:
  //     result = inputValue;
  // }

  // Method two: Create a conversion rates object to store calculations. This not only makes it easier to add more units later but also keeps the logic concise.
  const conversionRates = {
    meters: { kilometers: 0.001, miles: 0.000621371 },
    kilometers: { meters: 1000, miles: 0.621371 },
    miles: { meters: 1609.34, kilometers: 1.60934 },
  };
  // Get the conversion factor from the lookup table.
  const factor = conversionRates[fromUnitValue][toUnitValue];
  result = inputValue * factor;

  //  sending our result from the 'result' variable to the paragraph in html
  resultText.textContent = result.toFixed(2);
}
// listening for a change on the "to" and "from" selects, then running the "sameUnits" function.
fromUnit.addEventListener("change", sameUnits);
toUnit.addEventListener("change", sameUnits);

// function to compare unit values in "to" and "from", if they are the same the button is disabled, otherwise it's enabled.
function sameUnits() {
  if (fromUnit.value === toUnit.value) {
    button.disabled = true;
    resultText.textContent =
      "Both units are the same, please select two unique units.";
  } else {
    button.disabled = false;
    resultText.textContent = "";
  }
}
