/**
 * Write a function that takes in a single word as a string and returns true if it's a palindrome and false otherwise (a palindrome is spelled the same way forwards and backwards).

	Ex:
	Input: "noon"
	Output: true

	Input: "horse"
	Output: false

	Input: "racecar"
	Output: true
 */

    function isPalendrome(string) {
        for (let i=0; i<Math.floor(string.length/2);i++) {
            var firstCharacter = string[i];
            var lastIndex = (string.length-1) - i;
            //console.log(i, lastIndex);
            var lastCharacter = string[lastIndex];
            //console.log(firstCharacter, lastCharacter);
    
            if (firstCharacter != lastCharacter) {
                return false;
            }
        }
    
        return true;
    }
    
    console.log(isPalendrome("noon"));
    console.log(isPalendrome("horse"));
    console.log(isPalendrome("rocecar"));