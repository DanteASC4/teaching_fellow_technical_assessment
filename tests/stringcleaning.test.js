// DON'T EDIT THIS FILE 
const strClean = require('../stringcleaning');

describe('function strClean declaration testing', () => {
    it('function strClean should be defined', () => {
        if(!strClean) console.log(`NOTE -- IF THE DEFINITION TEST FAILED READ THIS: there are a couple possible reasons why, here are 4 of the more likely possibilites:\n1. You changed the name of the original function in 'stringcleaning'\n2. You something messed up the original module.exports line at the bottom of the file\n3. Something messed up the 'require' line in the 'stringcleaning.test.js' file\n4. The 'stringcleaning.js' file you're working in could be in the wrong directory\n\nWhat do you do if you can't get it to work? I'd say copy the 'stringcleaning.js' and 'stringcleaning.test.js' files and delete the one's that aren't working. You can keep your code of course, just paste it into the fresh files and test away! If you really can't get it to work, contact Dante@allstarcode.org!`)
        expect(strClean).toBeDefined()
    });
});

describe('strClean when given an array of strings...', () => {

    it('should remove leading and trailing whitespace from all strings like " blah", "blaah ", and " blaaah "', () => {
        expect(strClean([" blah", "blaah ", " blaaah "])).toEqual(["blah", "blaah", "blaaah"]);
    });

    it('should swap any spaces that are not trailing in the strings with underscores', () => {
        expect(strClean(["I am a test", "This is a test  too"])).toEqual(["I_am_a_test", "This_is_a_test__too"]);
    });

    it('should still remove leading and trailing spaces', () => {
        expect(strClean([" I am a test ", "           This is a test   too"])).toEqual(["I_am_a_test", "This_is_a_test___too"]);
    });

    it(`should replace all 0 characters with 'zero' and all 1 characters with 'one'`, () => {
        expect(strClean(['01101110','01101001','01100011','01100101','00101100','00100000','01111001','01101111','01110101','00100000','01110010','01100101','01100011','01101111','01100111','01101110','01101001','01111010','01100101','01100100','00100000','01100010','01101001','01101110','01100001','01110010','01111001','00100001',])).toEqual(["zerooneonezerooneoneonezero", "zerooneonezeroonezerozeroone", "zerooneonezerozerozerooneone", "zerooneonezerozeroonezeroone", "zerozeroonezerooneonezerozero", "zerozeroonezerozerozerozerozero", "zerooneoneoneonezerozeroone", "zerooneonezerooneoneoneone", "zerooneoneonezeroonezeroone", "zerozeroonezerozerozerozerozero", "zerooneoneonezerozeroonezero", "zerooneonezerozeroonezeroone", "zerooneonezerozerozerooneone", "zerooneonezerooneoneoneone", "zerooneonezerozerooneoneone", "zerooneonezerooneoneonezero", "zerooneonezeroonezerozeroone", "zerooneoneoneonezeroonezero", "zerooneonezerozeroonezeroone", "zerooneonezerozeroonezerozero", "zerozeroonezerozerozerozerozero", "zerooneonezerozerozeroonezero", "zerooneonezeroonezerozeroone", "zerooneonezerooneoneonezero", "zerooneonezerozerozerozeroone", "zerooneoneonezerozeroonezero", "zerooneoneoneonezerozeroone", "zerozeroonezerozerozerozeroone"])
    });

    it(`should still remove leading & trailing spaces, and replace interior spaces with underscores, and replace 0's and 1's with 'zero's and 'one's`, () => {
        expect(strClean([' 01000010 01101100 01100001 01101000 00100001 just testing!!   ', `just testing!!  ' '`])).toEqual(["zeroonezerozerozerozeroonezero_zerooneonezerooneonezerozero_zerooneonezerozerozerozeroone_zerooneonezeroonezerozerozero_zerozeroonezerozerozerozeroone_just_testing!!", "just_testing!!__'_'"])
    });

    it(`should remove any digits from the string that are not 0 or 1`, () => {
        expect(strClean(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"])).toEqual(["zero", "one", "", "", "", "", "", "", "", "", "onezero"])
        expect(strClean(["10023456789", "   231  320 "])).toEqual(["onezerozero", "one__zero"]);
    });

    it(`should do it all together!`, () => {
        expect(strClean([`        This is the final test, the 8 test in this suite of tests. Maybe you got 0 errors, maybe you got 1. If you got more that's also fine. What matters is you did your best, hope to see you summer two2 0 two2 0!                   `])).toEqual([`This_is_the_final_test,_the_test_in_this_suite_of_tests._Maybe_you_got_zero_errors,_maybe_you_got_one._If_you_got_more_that's_also_fine._What_matters_is_you_did_your_best,_hope_to_see_you_summer_two_zero_two_zero!`]);
    });
});

