// const eqArrays = function(firstArray, secondArray) {
//   let test = true;
//   for (let i = 0; i < firstArray.length; i++) {
//     if (firstArray[i] !== secondArray[i]) {
//       test = false;
//       return test;
//     }
//   }
//   return test;
// // };

// const assertArraysEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`💚💚💚 Assertation Passed: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`🚨🚨🚨 Assertation Failed: ${actual} !== ${expected}`);
//   }
// };

const middle = function(array) {
  const middleIndex = Math.floor(array.length / 2);
  const arr = [];
  if (array.length <= 2) {
    return arr;
  } else if (array.length % 2 === 0) {
    arr.push(array[middleIndex - 1]);
    arr.push(array[middleIndex]);
  } else {
    arr.push(array[middleIndex]);
  }
  return arr;
};

module.exports = middle;

