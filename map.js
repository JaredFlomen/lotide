const words = ["ground", "control", "to"];

const map = function(array, callback) {
  const results = [];
  for (let item of array){
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);

//console.log(results1);

const eqArrays = function(firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertation Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🚨🚨🚨 Assertation Failed: ${actual} !== ${expected}`);
  }
};

assertArraysEqual(eqArrays(results1, ['g', 'c', 't']), true);
assertArraysEqual(eqArrays(results1, ['g', 'f', 'r']), false);
