"use strict";

// Part 1 - strict mode and reserved words

let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriversLicense = true;
}

if (hasDriversLicense) {
  console.log("I can drive :D");
}
// Reserved words for possible future features can't be used for variable names
// const interface = "Audio";
//const private = 234;
