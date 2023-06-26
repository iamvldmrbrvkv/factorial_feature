var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('it will test if the output of 5! is equal to 120', () => {
      // Setup
      const expectedResult = 120;
      const inputNumber = 5;
      
      // Exercise
      const result = Calculate.factorial(inputNumber);
      
      // Verify
      assert.strictEqual(result, expectedResult);
    });
    
    it('it checks if your factorial method returns 6 when you pass 3 to .factorial()', () => {
      // Setup
      const expectedResult = 6;
      const inputNumber = 3;
      
      // Exercise
      const result = Calculate.factorial(inputNumber);
      
      // Verify
      assert.strictEqual(result, expectedResult);
    });
    
    it('returns 1 when you pass in 0', () => {
      // Setup
      const expectedResult = 1;
      const inputNumber = 0;
      
      // Exercise
      const result = Calculate.factorial(inputNumber);
      
      // Verify
      assert.strictEqual(result, expectedResult);
    });
  });
});