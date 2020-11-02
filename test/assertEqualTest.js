const assert = require('chai').assert;

describe('#Comparing values', () => {
  it('Should return true when comparing "Jared" to "Jared"', () => {
    const result = "Jared";
    const output = "Jared"
    assert.equal(result, output)
  });

  it('Should return true when comparing "1" to "1"', () => {
    const result = "1";
    const output = "1"
    assert.equal(result, output)
  });

});


