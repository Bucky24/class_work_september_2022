/*
Write a function that takes in an array of integers and the array with duplicates removed

Ex:
Input: [1,2,2,3]
Output: [1,2,3]

Input: [4,5,4,4,7,5]
Output: [4,5,7]

Input: [1,2,3,5]
Output: [1,2,3,5]
*/

function removeDuplicates(array) {
    return array.filter((element, index) => array.indexOf(element) !== index);

    const newArray = [];

    for (const element of array) {
        if (!newArray.includes(element)) {
            newArray.push(element);
        }
    }

    return newArray;
}

const removeDuplicates = (array) => {
    return array.filter((element, index) => {
        return array.indexOf(element) !== index;
    });
}
