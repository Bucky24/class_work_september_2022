function getNumber(a, b) {
    return a + b;
}

function doOperation(a, b, fn) {
    return fn(a, b);
}

var result = doOperation(5, 10, getNumber);
console.log(result);