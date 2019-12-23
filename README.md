# ASC Teaching Fellow Technical Assessment!


Here you'll find the All Star Code Teaching Fellow techincal assessment, which consists of 3 tasks, to be completed and sent to Dante@allstarcode.org, as a github gist, repl, or other online code sharing service with the 3 functions.

### **YOU DO NOT HAVE TO GET EVERYTHING CORRECT OR PASS ALL THE TEST SPECS TO GET HIRED JUST DO YOUR BEST!😄**

### Steps to tackling the Assessment
1. Clone or download this repo
2. Navigate into it from the command line and before doing anything else run the command `npm install`
    - If there were any errors for the prior command please run the command `npm init` for the questions just press enter as it matter, and then `npm install`
3. The files you should be coding in are:
    - fizzbuzz.js
    - string_cleaning.js
    - garble.js
    - The tests folder are what your functions will be tested with, feel free to look at the tests, but don't edit them, as when you send your work in those exact tests will be used to test your answers.
4. Follow the prompts below for each challenge and do your best!

---

### Jump to prompts:

- **[fizzbuzz](#fizzbuzz.js)**<br>
- **[string_cleaning](#string_cleaning.js)**<br>
- **[garble](#garble.js)**<br>

---

## fizzbuzz.js
- Given function fizzBuzz which takes a number *start*, a number *end*, and another number *skip*, return an array that has all numbers from 1 to n, where each n does not have digit m in it. 
    - E.g.
        - `fizzBuzz(1, 9, 5) -> [1, 2, 3, 4, 6, 7, 8, 9]`
            - The number 5 was skipped!
        - `fizzBuzz(1, 20, 1) -> [2, 3, 4, 5, 6, 7, 8, 9, 20]`
            - Since `10, 11, 12, 13, 14, 15, 16, 17, 18, and 19` have the number '1' in them, they were all skipped!
        - `fizzBuzz(99, 101, 0) -> [99]`
            - Since `100 & 101` have the number '0' in them, they were skipped!

---

## string_cleaning.js
- Given function strClean which takes an array of strings, return an array with the strings that've been cleaned, cleaned meaning:
    - Any leading or trailing whitespaces have been removed.
        - E.g. `'  Blah!  ' -> 'Blah!'`
    - Any number of spaces within the string should be replaced with an underscore. 
        - E.g: 'I am &nbsp;&nbsp;spaced' ` -> 'I_am_spaced'`
    - Any digits should be replaced with the word for that digit.
        - E.g. `'100' -> 'onezerozero'`
    - Any digits that aren't 0's or 1's should be removed.
        - E.g. `10023 -> 'onezerozero'`

---

## garble.js
- Given function garble which takes a string as input should return an array of 'garble', garble being an array of sub arrays, each array consists of either 2 elements if the character code is even, or 3 elements if the character code is odd. The function Garble should Also be able to take an array of sub arrays and return the string!***Note you don't have to worry about multiline strings or anything***
- If the input is a string then:
    - For each character of the string:
    - If the character code is **even** the sub array should consist of 2 elements: 
        - the `(charcode / 2)`
        - `2`
            - E.g. if the characode was 10, the 'garble' sub array would be: `[5, 2]`
    - If the character code is **odd**, the sub array should consist of 3 elements:
        - `(The charcode - 1)/2`
        - `2`
        - `1`
            - E.g. if the charcode was 11, the 'garble' sub array for that character would be: `[5, 2, 1]`
<br>
- If the input is an array of sub-arrays, do the same thing you do to make the sub-arrays, but in reverse!
    - To get a sub array, the first element is always the charcode/2, and the second is 2. To undo that, you just multiply the first element by the second!
    - If a sub array has a length of three, you know it will have a 1 at index 2. How do you undo an odd character code?