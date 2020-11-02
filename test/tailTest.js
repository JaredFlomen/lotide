const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays")
const tail = require('../tail')

assertArraysEqual(eqArrays(tail(["Sup", "Lighthouse", "Jared"]),["Lighthouse", "Jared"]), true);

assertArraysEqual(eqArrays(tail(["Sup", "Lighthouse"]), ["Lighthouse"]), true);


// assertArraysEqual(tail(["Jared"]), []);
// assertArraysEqual(tail([]), []);