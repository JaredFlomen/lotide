const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertation Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🚨🚨🚨 Assertation Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 211);
assertEqual("Jared", "Jared");
