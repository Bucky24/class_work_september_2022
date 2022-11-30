const array = [1,2,3,4,5,6,7,8,9];

const newArray = array.filter((item) => {
    return item > 3;
});

console.log(newArray);

const newArray2 = array.map((item) => {
    if (item < 3) {
        return 'small';
    }

    return 'large';
});

console.log(newArray2);

const newArray3 = array.filter((item) => item > 3).map((item) => item * 2);
console.log(newArray3);