"use strict";

// Part 1 - strict mode and reserved words

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) {
//   hasDriversLicense = true;
// }

// if (hasDriversLicense) {
//   console.log("I can drive :D");
// }

// Reserved words for possible future features can't be used for variable names
// const interface = "Audio";
// const private = 234;

// Functions

// function logger() {
//   console.log("My name is Gord");
// }

// calling/running/invoking the function - executing/using the function
// logger();
// logger();
// logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
