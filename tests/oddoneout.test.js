// DON'T EDIT THIS FILE 
const oddOneOut = require('../oddoneout');

describe('function oddOneOut declaration testing', () => {
    it('function oddOneOut should be defined', () => {
        if(!oddOneOut) console.log(`NOTE -- IF THE DEFINITION TEST FAILED READ THIS: there are a couple possible reasons why, here are 4 of the more likely possibilites:\n1. You changed the name of the original function in 'stringcleaning'\n2. You something messed up the original module.exports line at the bottom of the file\n3. Something messed up the 'require' line in the 'stringcleaning.test.js' file\n4. The 'stringcleaning.js' file you're working in could be in the wrong directory\n\nWhat do you do if you can't get it to work? I'd say copy the 'stringcleaning.js' and 'stringcleaning.test.js' files and delete the one's that aren't working. You can keep your code of course, just paste it into the fresh files and test away! If you really can't get it to work, contact Dante@allstarcode.org!`)
        expect(oddOneOut).toBeDefined()
    });
});



describe('function oddOneOut when given an array of integers should...', () => {
    it('should return the first odd integer from a given array of integers', () => {
        expect(oddOneOut([1, 2, 3])).toBe(1);
        expect(oddOneOut([0, 2, 3, 4, 6, 8])).toBe(3);
        expect(oddOneOut([11])).toBe(11);
        expect(oddOneOut([99999999999])).toBe(99999999999);
    });
    
    it('should return -1 if there are no numbers in the given array', () => {
        expect(oddOneOut([0, 2, 4, 6, 8, 10, 14, 12, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98 ])).toBe(-1);
        expect(oddOneOut([2, 4, 6])).toBe(-1);
        expect(oddOneOut([0])).toBe(-1);
        expect(oddOneOut([])).toBe(-1);
    });
});

