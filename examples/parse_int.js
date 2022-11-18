/*
Write a function that takes in a string and if the string is a string representation of a number, return the negative version of that number otherwise throw an Error.

  Ex:
  Input: '1'
  Output: -1

  Input: '4'
  Output: -4

  Input: 'cow'
  Error
*/

function invertStringNumber(stringNumber) {
    const intValue = parseFloat(stringNumber);

    if (Number.isNaN(intValue)) {
        throw new Error("Bad! not a number");
    }

    return -intValue;
}

console.log(invertStringNumber("1"));
console.log(invertStringNumber("4"));
console.log(invertStringNumber("-10"));
console.log(invertStringNumber("4.5"));
console.log(invertStringNumber("cow"));