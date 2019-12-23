// DON'T EDIT THIS FILE 
const garble = require('../garble');

describe('function garble given a string should...', () => {
    it('should return an array of sub arrays, each of which follow the rules from the prompt', () => {
        expect(garble('Hello')).toEqual([[ 36, 2 ], [ 50, 2, 1 ], [ 54, 2 ], [ 54, 2 ], [ 55, 2, 1 ]]);
    });

    it('should also work with spaces', () => {
        expect(garble('Hello World')).toEqual([[ 36, 2 ], [ 50, 2, 1 ], [ 54, 2 ], [ 54, 2 ], [ 55, 2, 1 ], [ 16, 2 ], [ 43, 2, 1 ], [ 55, 2, 1 ], [ 57, 2 ], [ 54, 2 ], [ 50, 2 ]]);
    });

    it('should also work with numbers, and nonalphanumeric (anything that is not a number or letter) characters', () => {
        expect(garble('This 1, should work!')).toEqual([  [ 42, 2 ], [ 52, 2 ], [ 52, 2, 1 ], [ 57, 2, 1 ], [ 16, 2 ], [ 24, 2, 1 ], [ 22, 2 ], [ 16, 2 ], [ 57, 2, 1 ], [ 52, 2 ], [ 55, 2, 1 ], [ 58, 2, 1 ], [ 54, 2 ], [ 50, 2 ], [ 16, 2 ], [ 59, 2, 1 ], [ 55, 2, 1 ], [ 57, 2 ], [ 53, 2, 1 ], [ 16, 2, 1 ] ]);
    });
});


describe('function garble given an array of garble...', () => {
    it('return the correct string translation, all of these tests are the reverse of the above!', () => {
        expect(garble([  [ 42, 2 ], [ 52, 2 ], [ 52, 2, 1 ], [ 57, 2, 1 ], [ 16, 2 ], [ 24, 2, 1 ], [ 22, 2 ], [ 16, 2 ], [ 57, 2, 1 ], [ 52, 2 ], [ 55, 2, 1 ], [ 58, 2, 1 ], [ 54, 2 ], [ 50, 2 ], [ 16, 2 ], [ 59, 2, 1 ], [ 55, 2, 1 ], [ 57, 2 ], [ 53, 2, 1 ], [ 16, 2, 1 ] ])).toBe('This 1, should work!');


        expect(garble([[ 36, 2 ], [ 50, 2, 1 ], [ 54, 2 ], [ 54, 2 ], [ 55, 2, 1 ], [ 16, 2 ], [ 43, 2, 1 ], [ 55, 2, 1 ], [ 57, 2 ], [ 54, 2 ], [ 50, 2 ]])).toBe('Hello World');


        expect(garble([[ 36, 2 ], [ 50, 2, 1 ], [ 54, 2 ], [ 54, 2 ], [ 55, 2, 1 ]])).toBe('Hello');
    });
});