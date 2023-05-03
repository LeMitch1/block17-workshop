const coffeeMenu = require("./coffee_data.js");

let sum = 0;

// COMMENT OUT ALL CONSOLE.LOG() FOR EACH STEP EXCEPT STEP TO TEST

coffeeMenu.forEach((element, i) => {
  // Step 2 - Print an array of all the drinks on the menu
  console.log(element.name);

  // Step 3 - Print an array of drinks that cost 5 and under
  if (element.price <= 5) {
    console.log(element.name);
  }

  // Step 4 - Print an array of drinks that are priced at an even number
  if (element.price % 2 === 0) {
    console.log(element.name);
  }

  // Step 5 - Print the total if you were to order one of every drink
  // console.log() below function
  sum += element.price;

  // Step 6 - Print an array with all the drinks that are seasonal
  if (element.seasonal) {
    console.log(element.name);
    // Step 7 - Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans"
    console.log(element.name + " with imported beans");
  }
});

// Step 5 console.log()
console.log(sum);
