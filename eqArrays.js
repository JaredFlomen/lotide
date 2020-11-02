// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`💚💚💚 Assertation Passed: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`🚨🚨🚨 Assertation Failed: ${actual} !== ${expected}`);
//   }
// };

const assertEqual = require('./assertEqual')

const eqArrays = function(firstArray, secondArray) {
  let test = true;
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      test = false;
    }
  }
  return test;
};


module.exports = eqArrays;