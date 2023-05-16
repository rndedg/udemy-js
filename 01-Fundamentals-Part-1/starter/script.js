// Part 1 - VALUES AND VARIABLES

// let js = "amazing";

// console.log(40 + 8 + 23 - 10);
// console.log(["apples", "bananas", "oranges"]);

// let firstName = "Gord";
// console.log(`Hello ${firstName}`);

// Part 2 - DATA TYPES

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Gord");

// javascriptIsFun = "YES!";
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// typeof known error/bug, unchanged due to legacy reasons
// console.log(typeof null);

// Part 3 - LET, CONST, VAR
// let can be reassigned, const cannot (immutable)
// const cannot be declared as an empty value
// var - should be avoided as it is more of a 'legacy' way of doing things but acts like let

// let age = 30;
// reassign/mutate variable
// age = 31;

// const birthYear = 1985;

// Part 4 - Basic Operators

// const now = 2023;
// const ageGord = now - 1985;
// const ageDave = now - 2018;
// // console.log(ageGord, ageDave);

// 2 ** 3 means 2 to the power of 3
// console.log(ageGord * 2, ageGord / 2, 2 ** 3);

// const firstName = "Gord";
// const lastName = "Letkeman";
// console.log(firstName + " " + lastName);

// Assignment operators
// let x = 10 + 5; // 15
// x += 10; // 25
// x *= 4; // 100
// x++; // x = x + 1
// x--; // x = x - 1
// console.log(x);

// Comparison operators
// console.log(ageGord > ageDave); // >, <, >=, <=
// console.log(ageDave >= 18);

// console.log(now - 1991 > now - 2018);

// Part 5 - Operator Precedence

// operator precedence table from MDN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table

// const now = 2023;
// const ageGord = now - 1985;
// const ageDave = now - 2018;
// console.log(ageGord, ageDave);

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5; // x, y = 10
// console.log(x, y);
// const averageAge = (ageGord + ageDave) / 2;
// console.log(ageGord, ageDave, averageAge);

// Part 6 - Template Literals

// const firstName = "Gord";
// const job = "developer";
// const birthYear = 1985;
// const year = 2023;

// Sloppy looking code
// const gord =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";

// Template literals are cleaner and more reusable
// const gord = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(gord);

// console.log(
//   "String with \n\
// multiple \n\
// lines"
// );

// console.log(`String with
// multiple lines
// using template literals`);

// Part 7 - If/Else Statements

// const age = 15;

// if (age >= 16) {
//   console.log("Sarah can get drivers license");
// } else {
//   const yearsLeft = 16 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} year/s.`);
// }

// const birthYear = 2012;
// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

// Part 8 - Type conversion and coercion
// conversion - when we manually convert a data type
// coercion - when JS automatically converts types behind the scenes

// type conversion

// const inputYear = "1991"; // mock data as if it was from an input field on a website (input returns are always a string)
// console.log(Number(inputYear) + 18);

// console.log(Number("Gord")); // NaN - an invalid number

// console.log(String(23));

// type coercion

// console.log("I am " + 23 + " years old"); // JS automatically converts numbers to string
// console.log("23" - "10" - 3); // -, *, / operators convert strings to numbers
// console.log("23" * "2");

// let n = "1" + 1; // "11"
// n = n - 1; // "11" - 1
// console.log(n); // 10

// Part 9 - Truthy and Falsy Values

// The five falsy values in JS:
// 1. 0
// 2. ''
// 3. undefined
// 4. null
// 5. NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Gord"));
// console.log(Boolean({}));
// console.log(Boolean(24));

// const money = 0;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log("You should get a job!");
// }

// let height;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }

// Part 10 - Equality Operators: == VS. ===
// === strict comparison
// == loose compaison, has type coercion
// const age = "18";
// if (age === 18) console.log("You just became an adult (strict)"); // if no else statement you don't need the {} block
// if (age == 18) console.log("You just became an adult (loose)");
// try to avoid loose compaisons and stick to converting before comparison

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);

// if (favourite === 23) {
//   console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 10) {
//   console.log("10 is also a cool number");
// } else {
//   console.log("Number is not 23, 7, or 10");
// }

// if (favourite !== 10) console.log("Why not 10?");

// Part 11 - Boolean Logic
// && - both must be true
// || - as long as one is true
// '!' - inverts true/false value

//Part 12 - Logical Operators

const hasDriversLicense = true; //A
const hasGoodVision = true; //B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive.");
// } else {
//   console.log("Someone else should drive.");
// }

const isTired = false; // C

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive.");
}
