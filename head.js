// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`💚💚💚 Assertation Passed: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`🚨🚨🚨 Assertation Failed: ${actual} !== ${expected}`);
//   }
// };

const assertEqual = require('./assertEqual');

const head = function(array) {
  return array[0];
};

//assertEqual("Lighthouse Labs", "Bootcamp");
// //assertEqual(1, 1);
// assertEqual(1, 211);
// assertEqual("Jared", "Jared");

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

