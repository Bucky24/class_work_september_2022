/*
Write a function that takes in an input and returns true if it's an integer and false otherwise.

Ex:
Input: "7"
Output: false

Input: 7
Output: true

Input: 4.3
Output: false
*/

function isInteger(input) {
    if (typeof input !== "number") {
        return false;
    }

    /*var inputAsString = "" + input;
    if (inputAsString.includes(".")) {
        return false;
    }*/
    var inputAsInteger = Math.floor(input);

    if (inputAsInteger !== input) {
        return false;
    }

    return true;
}

console.log(isInteger("7"));
console.log(isInteger(7));
console.log(isInteger(4.3));