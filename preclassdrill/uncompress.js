/*
Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:

<number><char>

for example, '2c' or '3a'.
The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.

test_00:
uncompress("2c3a1t"); // -> 'ccaaat'
test_01:
uncompress("4s2b"); // -> 'ssssbb'
test_02:
uncompress("2p1o5p"); // -> 'ppoppppp'
test_03:
uncompress("3n12e2z"); // -> 'nnneeeeeeeeeeeezz'
*/

function uncompress(input) {
    const pairs = [];

    let state = "number";
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8',' 9'];
    let cache = "";
    let pair = {};
    for (let i=0;i<input.length;i++) {
        const character = input[i];

        if (state === "number") {
            if (numbers.includes(character)) {
                cache += character;
            } else {
                //console.log("found number", cache);
                pair.number = parseInt(cache);
                cache = "";
                i--;
                state = "character";
            }
        } else if (state === "character") {
            //console.log("found character " + character);
            state = "number";
            pair.character = character;
            pairs.push(pair);
            pair = {};
        }
    }

    let resultString = "";
    for (const pair of pairs) {
        for (let i=0;i<pair.number;i++) {
            resultString += pair.character;
        }
    }

    return resultString;
}

console.log(uncompress("10c3a1t5k"));