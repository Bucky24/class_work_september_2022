/*
Write a function that takes in an array of numbers and outputs the average of all the numbers.

Ex:
Input: [ 1 , 4 , 7 ]
Output: 4

Input: [ 10, 5 ]
Output: 7.5

Input: [ 1.5, 3, 2.5, 1 ]
Output: 2
*/

function getAverage(numbers) {
    // add all the numbers together
    var sum = 0;
    for (var i=0;i<numbers.length;i++) {
        var number = numbers[i];

        sum += number;
    }
    // divide that sum by the number of numbers
    var result = sum / numbers.length;
    // that's our answer
    return result;
}

var result = getAverage([1,4,7]);
myElement.textContent = result;
console.log(getAverage([10, 5]));