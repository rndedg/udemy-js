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

// const age1 = calcAge1(1985);

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// Function Expression
// tends to keep code cleaner and more structured by having functions declared at the top
// declaration vs expression comes down to personal preference
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1985);

// Arrow Functions
// a special form of function expression that is shorter and therefore faster to write

// const calcAge3 = (birthyear) => 2037 - birthyear;

// const age3 = calcAge3(1985);
// console.log(age1, age2, age3);

// const yearsUntilRetirement = (birthyear, firstName) => {
//   const age = 2037 - birthyear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years.`;
// };

// console.log(yearsUntilRetirement(1985, "Gord"));
// console.log(yearsUntilRetirement(1980, "Dave"));

// Functions Calling Other Functions
// keeps code DRY and makes functions more reusable

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// Reviewing Functions

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthyear, firstName) {
//   const age = calcAge(birthyear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years.`);
//     return retirement;
//   } else {
// returning -1 or a number like 9999 is used to show clearly that the result has no real meaning.
//     console.log(`${firstName} has already retired.`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1985, "Gord"));
// console.log(yearsUntilRetirement(1950, "Dave"));
