/*

Write a function that takes in a string and outputs the first occurrence of a character that does not repeat itself in that string.

Ex:
	Input: "the quick brown fox jumps over the calm kitten quietly"
	Output: "b"

	Input: "this hat is the greatest!"
	Output: "g"

	Input: "what a wonderful day it has been!"
	Output: "o"
*/

function findFirstNonDuplicate(str) {
    for (let i=0;i<str.length;i++) {
        var char = str[i];

        var count = 0;
        for (let j=0;j<str.length;j++) {
            if (str[j] === char) {
                count ++;
            }
        }

        if (count === 1) {
            return char;
        }
    }
}

function findFirstNonDuplicate(str) {
    for (let i=0;i<str.length;i++) {
        var char = str[i];
        var newString = str.substring(i+1);

        var firstIndex = newString.indexOf(char);

        if (firstIndex === -1) {
            return char;
        }
    }
}


console.log(findFirstNonDuplicate("the quick brown fox jumps over the calm kitten quietly"));
console.log(findFirstNonDuplicate("this hat is the greatest!"));
console.log(findFirstNonDuplicate("what a wonderful day it has been!"));