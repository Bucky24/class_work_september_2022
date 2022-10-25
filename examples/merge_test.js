function getNumber(a, b) {
    console.log(a);
    return a + b;
}

function doOperation(a, b, fn) {
    return fn(a, b);
}

var result = doOperation(5, 10, getNumber);
console.log(result);
console.log(result + 10);