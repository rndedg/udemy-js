// Assignments

// Part 1. VALUES AND VARIABLES
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

const country = "Canada";
const continent = "North America";
let population = 38.25;

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

const isIsland = false;
let language;

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

language = "English";
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

const finlandPopulation = 6;
console.log(
  "Does Canada have more people that Finland? " +
    (population > finlandPopulation)
);

const averagePopulation = 33;

// console.log(
//   "Does Canada have less people than the average country? " +
//     (population < averagePopulation)
// );

// console.log(
//   `${country} is in ${continent} and its ${population} million people mostly speak ${language}.`
// );

// Part 7. IF/ELSE STATEMENTS

// 1. If your country's population is greater that 33 million, log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like
// 'Portugal's population is 22 million below average' (the 22 is the average of 33
// minus the country's population)
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original

if (population > averagePopulation) {
  console.log(`${country}'s population is above average`);
} else {
  const populationDifference = averagePopulation - population;
  console.log(
    `${country}'s population is ${populationDifference} million below the average.`
  );
}
