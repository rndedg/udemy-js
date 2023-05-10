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

const now = 2023;
const ageGord = now - 1985;
const ageDave = now - 2018;
// console.log(ageGord, ageDave);

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x, y = 10
console.log(x, y);
const averageAge = (ageGord + ageDave) / 2;
console.log(ageGord, ageDave, averageAge);

// Assignments

// Part 1. VALUES AND VARIABLES
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

// const country = "Canada";
// const continent = "North America";
// let population = 38.25;

// console.log(
//   `I live in ${country}, ${continent} which has a population of ${population} million people.`
// );

// Part 2. DATA TYPES

// LECTURE: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console

// const isIsland = false;
// let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// Part 3. LET, CONST, VAR

// 1. Set the value of 'language' to the language spoken where you live (some
//   countries have multiple languages, but just choose one)
//   2. Think about which variables should be const variables (which values will never
//   change, and which might change?). Then, change these variables to const.
//   3. Try to change one of the changed variables now, and observe what happens

// language = "English";
// console.log(language);

// Part 4. BASIC OPERATORS

// 1. If your country split in half, and each half would contain half the population,
// then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console
// 3. Finland has a population of 6 million. Does your country have more people than
// Finland?
// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country?
// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million
// people speak portuguese'

// console.log("Half of the population of Canada in millions: " + population / 2);
// console.log(population++);

// const finlandPopulation = 6;
// console.log(
//   "Does Canada have more people that Finland? " +
//     (population > finlandPopulation)
// );

// const averagePopulation = 33;

// console.log(
//   "Does Canada have less people than the average country? " +
//     (population < averagePopulation)
// );

// console.log(
//   `${country} is in ${continent} and its ${population} million people mostly speak ${language}.`
// );
