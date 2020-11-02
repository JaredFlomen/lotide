const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('returns ["Lighthouse, "Jared"] when passed ["Sup", "Lighthouse", "Jared"]', () => {
    assert.deepEqual(tail(["Sup", "Lighthouse", "Jared"]), ["Lighthouse", "Jared"]);
  });

  it('returns ["Lighthouse"] when passed ["Sup", "Lighthouse"]', () => {
    assert.deepEqual(tail(["Sup", "Lighthouse"]), ["Lighthouse"]);
  });

});