/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

Ex. 1:

Input: s = "()"
Output: true

Ex. 2:

Input: s = "()[]{}"
Output: true

Ex. 3:

Input: s = "(]"
Output: false
*/

function isValid(string) {
    const stack = [];

    for (const char of string) {
        if (["(", "{", "["].includes(char)) {
            stack.push(char);
        } else {
            const topOfStack = stack.pop();
            if (
                (char === ")" && topOfStack === "(") ||
                (char === "]" && topOfStack === "[") ||
                (char === "}" && topOfStack === "{")
            ) {
                continue;
            }
            return false;
        }
    }

    if (stack.length > 0) {
        return false;
    }

    return true;
}

console.log(isValid("(([])){}"));
console.log(isValid("(([]){}"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));