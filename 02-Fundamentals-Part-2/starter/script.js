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

// Introduction to Arrays

// Will get overwhelming to keep using individual variables
// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// Literal syntax, most common way of creating an array
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const years = new Array(2012, 1985, 2003);
// console.log(years);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// Will automatically target the last item in an array
// console.log(friends[friends.length - 1]);

// Only primative values are immutable when set as const
// Can't replace entire array, only sections/items
// friends[2] = "Dave";
// console.log(friends);

// friends = ["Mark", "William"];

// const firstName = "Gord";
// const gord = [firstName, "Letkeman", 2037 - 1985, "developer", friends];

// console.log(gord);

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2016];

// This works but it is sloppy

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];

// console.log(ages);

// Basic Array Methods

// const friends = ["Mark", "William", "Dave"];
// console.log(friends);

// Add Elements
// const newLength = friends.push("Eric"); // adds to end
// console.log(friends);
// console.log(newLength);

// friends.unshift("John"); // adds to beginning
// console.log(friends);

// Remove Elements
// friends.pop(); // last element
// const popped = friends.pop();
// console.log(friends);
// console.log(popped);

// friends.shift(); // first element
// console.log(friends);

// console.log(friends.indexOf("William")); // shows index of element

// console.log(friends.includes("Mark")); // true or false if element is in array
// console.log(friends.includes("Bob"));

// if (friends.includes("Mark")) {
//   console.log("You have a friend named Mark");
// }

// Introduction to Objects

// const gord = {
//   firstName: "Gord",
//   lastName: "Letkeman",
//   age: 2037 - 1985,
//   job: "developer",
//   friends: ["Mike", "Shane", "Chris"],
// };

// Dot vs. Bracket notation

// const gord = {
//   firstName: "Gord",
//   lastName: "Letkeman",
//   age: 2037 - 1985,
//   job: "developer",
//   friends: ["Mike", "Shane", "Chris"],
// };

// console.log(gord.lastName);

// console.log(gord["lastName"]);

// bracket notation can be a computed element
// const nameKey = "Name";
// console.log(gord["first" + nameKey]);
// console.log(gord["last" + nameKey]);

// using user input to look up an object value
// const interestedIn = prompt(
//   "What is do you want to know about Gord? Choose between firstName, lastName, age, job, and friends"
// );

// if (gord[interestedIn]) {
//   console.log(gord[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! What is do you want to know about Gord? Choose between firstName, lastName, age, job, and friends"
//   );
// }

// gord.location = "Canada";
// gord["hobby"] = "guitar";
// console.log(gord);

// Challenge
// "Gord has 3 friends and his best friend is named Mike"

// console.log(
//   `${gord.firstName} has ${gord.friends.length}, and his best friend is named ${gord.friends[0]}.`
// );

// Object Methods

// functions in objects
// const gord = {
//   firstName: "Gord",
//   lastName: "Letkeman",
//   birthYear: 1985,
//   job: "developer",
//   friends: ["Mike", "Shane", "Chris"],
//   canPlayGuitar: true,
// calcAge: function (birthYear) {
//   return 2037 - birthYear;
// },
// calcAge: function () {
//   return 2037 - this.birthYear;
// },
//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return 2037 - this.birthYear;
//   },
//   getSummary: function () {
//     return `${gord.firstName} is a ${gord.age}-year old ${gord.job}, and he ${
//       gord.canPlayGuitar ? "can" : "can't"
//     } play guitar.`;
//   },
// };

// console.log(gord.calcAge(this.birthYear));
// console.log(gord.age);

// Challenge
// "Gord is a 52 year old developer, and he can/can't play guitar."

// console.log(gord.getSummary());

// Iteration: The For Loop

// for loop keeps running while the condition (rep >= 10) is TRUE

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repitition ${rep}`);
// }

// Looping Arrays, Breaking, and Continuing

const gord = [
  "Gord",
  "Letkeman",
  2037 - 1985,
  "developer",
  ["Mike", "Shane", "Chris"],
  true,
];

const types = [];

for (let i = 0; i < gord.length; i++) {
  // Reading from gord array
  console.log(gord[i]);

  // Filling types array
  // types[i] = typeof gord[i];

  // Added new element to the end of types array
  types.push(typeof gord[i]);
}

console.log(types);

const years = [1985, 1987, 2016, 2018];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// Continue and Break
// continue: exit current iteration of the loop and go to the next one
// break: exit the entire loop

console.log("----- Only strings -----");
for (let i = 0; i < gord.length; i++) {
  if (typeof gord[i] !== "string") continue;
  console.log(gord[i], typeof gord[i]);
}

console.log("----- Break With number -----");
for (let i = 0; i < gord.length; i++) {
  if (typeof gord[i] === "number") break;
  console.log(gord[i], typeof gord[i]);
}
