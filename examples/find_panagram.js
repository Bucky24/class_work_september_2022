/*
Write a function that takes in a string and returns true if it’s a pangram or false otherwise.
Pangram: a sentence that contains every letter in the alphabet.
Ex:
Input: “Watch Jeopardy, Alex Trebek’s fun TV quiz game”
Output: true
Input: “Five hexing wizard bots jump quickly”
Output: true
Input: “JavaScript is the best”
Output: false
*/

function isPanagram(string) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    
    var lowercaseString = string.toLowerCase();
    
    for (var character of alphabet) {
    //for (var i=0;i<alphabet.length;i++) {
        //var character = alphabet[i];
        if (!lowercaseString.includes(character)) {
            return false;
        }
    }

    return true;
}

console.log(isPanagram("Watch Jeopardy, Alex Trebek’s fun TV quiz game"));
console.log(isPanagram("Five hexing wizard bots jump quickly"));
console.log(isPanagram("JavaScript is the best"));