/*
Longest Palindrome
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
Example:
Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
Use the following testcase: "abcccdd"
Hint:
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const letterMap = {};
    for (const char of s) {
        if (!letterMap[char]) {
            letterMap[char] = 0;
        }

        letterMap[char] ++;
    }

    let count = 0;
    let addedCenter = false;
    for (const letter in letterMap) {
        const letterCount = letterMap[letter];
        const isOdd = letterCount % 2 !== 0;
        if (!isOdd) {
            count += letterCount;
        } else {
            count += letterCount - 1;
            if (!addedCenter) {
                count += 1;
                addedCenter = true;
            }
        }
    }
    
    return count;
};

console.log(longestPalindrome("abccccddd"));