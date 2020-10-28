const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertation Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🚨🚨🚨 Assertation Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (string) {
  const stringObj = string.split(" ").join("");
  const resultObj = {};
  for (let str of stringObj){
    if(resultObj[str]){
      resultObj[str] ++;
    }
    else {
      resultObj[str] = 1;
    }
  }
  return resultObj;
};

console.log(countLetters("JJJAAR"));