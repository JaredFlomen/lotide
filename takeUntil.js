const takeUntil = function(array, callback){
  let output = [];
  let i = 0;
  while (!callback(array[i])) {
    output.push(array[i]);
    i++;
  }
  return output;
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5]
const results1 = takeUntil(data1, x => x < 0);
//console.log(results1);

console.log("---");

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
//console.log(results2);

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

assertArraysEqual(eqArrays(results1, [ 1, 2, 5, 7, 2 ]), true);
assertArraysEqual(eqArrays(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]), true);