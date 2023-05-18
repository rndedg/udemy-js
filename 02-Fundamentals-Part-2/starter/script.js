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

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// Function Declarations Vs. Expressions

// Function Declaration
// can call declared function before it is defined (hoisting)

const age1 = calcAge1(1985);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

// Function Expression
// tends to keep code cleaner and more structured by having functions declared at the top
// declaration vs expression comes down to personal preference
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1985);
console.log(age1, age2);
