const assertObjectsEqual = function(actual, expected){
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  if (actual === expected) {
    console.log(`💚💚💚 Assertation Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🚨🚨🚨 Assertation Failed: ${actual} !== ${expected}`);
  }
}

assertObjectsEqual();

const eqArrays = function(firstArray, secondArray) {

  if (firstArray.length !== secondArray.length) {
    return false;
  } 

  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};


const eqObjects = function(object1, object2) {
  const obj1Length = Object.keys(object1).length;
  const obj2Length = Object.keys(object2).length;

  //Testing the length of each object
  if (obj1Length !== obj2Length) {
    return false;
  } 

  //Test if both values are arrays
  for (const i of Object.keys(object1)) {
    if (Array.isArray(object1[i]) && Array.isArray(object2[i])) {
      const isEqualArray = eqArrays(object1[i], object2[i]);
      if (!eqArrays(object1[i], object2[i])){
        return false;
      } 
    } 
  }
  return true;
};

const dc = {d: ["2", 3], c: "1"}
const cd = {c: "1", d: ["2", 3]};
const cd2 = { c: "1", d: ["2", 3, 4] };
const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};
const abc = {a: "1", b: "2", c: "3"};

assertObjectsEqual(eqObjects(ab, ba), true);
assertObjectsEqual(eqObjects(ab, abc), false);
assertObjectsEqual(eqObjects(cd, dc), true);
assertObjectsEqual(eqObjects(cd, cd2), false);
