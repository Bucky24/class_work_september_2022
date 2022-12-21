/*
Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.
*/

function mostFrequentChar(string) {
    const charMap = {};
    for (const char of string) {
        if (!charMap[char]) {
            charMap[char] = 0;
        }

        charMap[char] ++;
    }

    const sortedEntries = Object.entries(charMap).sort((a, b) => {
        return b[1] - a[1];
    });

    return sortedEntries[0][0];
}

console.log(mostFrequentChar("abcda"));
console.log(mostFrequentChar("abcdbbcd"));
console.log(mostFrequentChar("abcddb"));