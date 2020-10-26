const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertation Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🚨🚨🚨 Assertation Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let arr = [];
  for (let i = 1; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
};

console.log(tail(["Sup", "Lighthouse", "Jared"]));
console.log(tail(["Jared"]));
console.log(tail([]));