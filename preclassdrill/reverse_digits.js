/*
Write a function that takes in a number and reverses the order of the digits.

Ex:
Input: 1234
Output:4321

Input: 1201
Output:1021

Input: 4
Output: 4
*/

function reverseDigits(number) {
    const numberAsString = `${number}`;
    const numberArray = numberAsString.split("");
    numberArray.reverse();
    const reversedNumberString = numberArray.join("");
    const reversedNumber = parseInt(reversedNumberString);

    return reversedNumber;
}

console.log(reverseDigits(1234));