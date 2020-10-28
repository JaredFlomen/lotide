const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertation Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🚨🚨🚨 Assertation Failed: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

const findKeyByValue = function(bestTVShowsByGenre, tvShow){
  for (let i in bestTVShowsByGenre){
    if (bestTVShowsByGenre[i] === tvShow){
      return i;
    }
  }
  return undefined;
}

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That 70's Show"), undefined);