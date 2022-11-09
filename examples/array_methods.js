const array = [1,2,3,4,5,6,7,8,9];

function doubleItem(element) {
    return element * 2;
}

const doubles = array.map(doubleItem);

console.log(doubles);