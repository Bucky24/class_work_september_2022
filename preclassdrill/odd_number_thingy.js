/*
PRE-CLASS DRILL:

Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

Ex. 1:

Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2
Since 2 has only one digit, return it.

Ex. 2:

Input: num = 0
Output: 0
*/

function doOddNumberThing(num) {
    if (num < 10) {
        return num;
    }

    const numArr = `${num}`.split("").map((digit) => {
        return parseInt(digit, 10);
    });

    let sum = 0;
    for (const num of numArr) {
        sum += num;
    }

    return doOddNumberThing(sum);
}

console.log(doOddNumberThing(38));
console.log(doOddNumberThing(0));
