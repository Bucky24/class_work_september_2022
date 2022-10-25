/*
PRE-CLASS DRILL:

Write a function that takes an array of integers as an input and outputs the first duplicate.

Ex:
Input: [ 2, 5, 6, 3, 5 ]
Output: 5

Input: [ 1, 3, 4, 1, 3, 4 ]
Output: 1

Input: [ 2, 4, 5 ]
Output: undefined
*/

function getDuplicate(intList) {
    for (let i=0;i<intList.length;i++) {
        const firstItem = intList[i];

        for (let j=i+1;j<intList.length;j++) {
            if (firstItem === intList[j]) {
                return firstItem;
            }
        }
    }
}

console.log(getDuplicate([ 2, 5, 6, 3, 5 ]));
console.log(getDuplicate([ 1, 3, 4, 1, 3, 4 ]));
console.log(getDuplicate([ 2, 4, 5 ]));