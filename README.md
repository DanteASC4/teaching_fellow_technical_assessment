# ASC Teaching Fellow Technical Assessment!


Here you'll find the All Star Code Teaching Fellow techincal assessment, which consists of 3 tasks, to be completed and sent to Dante@allstarcode.org, as a github gist, repl, or other online code sharing service with the 3 functions.

### **IT IS NOT NECESSARY TO GET EVERYTHING CORRECT OR PASS ALL THE TEST SPECS TO GET HIRED JUST DO YOUR BEST! 😄**

### Steps to tackling the Assessment
1. Clone or download this repo
2. Navigate into it from the command line and before doing anything else run the command `npm install`
    - If there were any errors for the prior command please run the command `npm init` for the questions just press enter as it matter, and then `npm install`
3. The files you should be coding in are:
    - fizzbuzz.js
    - stringcleaning.js
    - garble.js
    - The tests folder are what your functions will be tested with, feel free to look at the tests, but do not edit them. These exact tests will be used to test your answers when you submit your work.
4. Follow the prompts below for each challenge and do your best!


### How to test your functions:
- The tests are already setup, and I've made commands that will let you test your answer for each challenge individually. This will only work correctly if:
    - You did not get any errors when running `npm install` from the command line *in* the cloned or downloaded folder
    - You did not modify/change the `module.exports` line at the bottom of `oddoneout.js fizzbuzz.js or stringcleaning.js`.
    - You did not modify/change **any** of the files in the `tests` folder.
    - You did not modify/change **any** of the scripts commands in the `package.json` file.

- From the command line, in the cloned or downloaded folder you can use the following commands to test your work:
    - `npm run test_odd` to test your `oddOneOut` function that should be in oddoneout.js
    - `npm run test_fizz` to test your `fizzBuzz` function that should be in fizzbuzz.js
    - `npm run test_string` to test your `strClean` function that should be in stringcleaning.js


For all of the above, the output on command line is long so you'll likely see something like this at first:

```shell
Test Suites: 1 failed, 1 total
Tests:       7 failed, 1 passed, 8 total
Snapshots:   0 total
Time:        1.781s
Ran all test suites matching /tests\\stringcleaning.test.js/i.
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! teachingFellows@1.0.0 test_string: `jest tests/stringcleaning.test.js`
npm ERR! Exit status 1
```
Your output may look a little different depending on how many tests were passed or failed, and which tests you ran. The important part is these lines:

```shell
Test Suites: 1 failed, 1 total
Tests:       7 failed, 1 passed, 8 total
```

This is telling you that your function passed 1 out 8 tests (Again it might be different for you). Now to fix the errors, and see what went wrong, you can scoll up in the console to see the expected outputs for each test, with the pre-defined inputs, and what your function returned. 

For example:
```shell
 Expected: ["I_am_a_test", "This_is_a_test__too"]
 Received: undefined

      16 |
      17 |     it('should swap any spaces that are not trailing in the strings with underscores', () => {
    > 18 |         expect(strClean(["I am a test", "This is a test  too"])).toEqual(["I_am_a_test", "This_is_a_test__too"]);
         |                                                                  ^
      19 |     });
```
This might look like a lot but it tells you what it expected, for what input, and what it got:
For this test it expected the output: `["I_am_a_test", "This_is_a_test__too"]`
But it received the output: `undefined`

The input is noted by a carrot:
```shell
> 18 |         expect(strClean(["I am a test", "This is a test  too"])).toEqual(["I_am_a_test", "This_is_a_test__too"]);
         |                                                                  ^
```
We see that it expected `strClean(["I am a test", "This is a test  too"])` to equal `["I_am_a_test", "This_is_a_test__too"]`! Now the task is why it went wrong! And fixing that is up to you! Feel free to console.log things and run your code normally to debug, but remember the solutions will be tested against these exact tests! And most importantly **YOU DONT HAVE TO PASS ALL THE TESTS TO BE HIRED PLEASE SUBMIT WHATEVER YOU MANAGE TO COMPLETE!**

<br>
---



## Odd One Out

- Open up oddoneout.js in the cloned or downloaded folder.
- The function oddOneOut takes an array *nums* and **returns the first odd number** in the given array **or -1 if there are no odd numbers**
    - Examples:
        - `oddOneOut([1, 2, 3]) → 1`
            - `1` is the first odd number
            <br>
        - `oddOneOut([10, 12, 13, 14, 16, 18]) → 13`
            - `13` is the first odd number
            <br>
        - `oddOneOut([2, 4, 6]) → -1`
            - There are no odd numbers so `-1` is returned instead

<br>

## fizzbuzz.js
- Open up fizzbuzz.js in the cloned or downloaded folder. 
- The function fizzBuzz takes an integer *start*, an integer *end*, an integer *skip*, and **returns an array** that has all integers from *start* to *end*, excluding integers with the digit *skip* in it.
    - E.g.
        - `fizzBuzz(1, 9, 5) → [1, 2, 3, 4, 6, 7, 8, 9]`
            - `5` was skipped!
            <br>
        - `fizzBuzz(1, 20, 1) → [2, 3, 4, 5, 6, 7, 8, 9, 20]`
            - Since `10, 11, 12, 13, 14, 15, 16, 17, 18, and 19` have the number '1' in them, they were all skipped!
            <br>
        - `fizzBuzz(99, 101, 0) → [99]`
            - Since `100 & 101` have the number '0' in them, they were skipped!

<br>

## stringcleaning.js
- Open up stringcleaning.js in the cloned or downloaded folder.
- The function strClean takes an array of strings and **returns an array** of cleaned strings, cleaned meaning:
    - Any leading or trailing whitespaces gets removed.
        - E.g. `strClean(['  Blah!  ']) → ['Blah!']`
        <br>
    - Any digit that isn't 0 or 1 gets removed.
        - E.g. `strClean(['10023']) → ['onezerozero']`
        <br>
    - Any digit that is 0 or 1 gets replaced with the word for that digit.
        - E.g. `strClean(['100']) → ['onezerozero']`
        <br>
    - Each space in the string gets replaced with an underscore. 
        - E.g: `strClean(['I am   spaced'])  → ['I_am___spaced']`



### Extra Credit Challenge:
***NOTE:** The extra credit challenge is completely optional. Not doing it will not hurt your chance of getting hired.*
- Function strClean should instead **return an array of subarrays** with each sub array containing two things:
    - The unclean original string
    - The resulting clean string
    - **Examples:**
        - `strClean(['10023']) → [['10023', 'onezerozero']]`
        - `strClean(['1', ' Much wow ']) → [['1', 'one'], [' Much wow ', 'Much_wow']]`
<br>
- Additionally, if the string does NOT need to be cleaned, it should return a sub array with:
    - The already clean original string
    - The string `'ALREADYCLEAN'`
    - **Examples:**
        - `strClean(['Yes']) → [['Yes', 'ALREADYCLEAN']]`
        - `strClean([' Hi! ', 'Clean']) → [[' Hi!            ', 'Hi!'],['Clean', 'ALREADYCLEAN']]`

