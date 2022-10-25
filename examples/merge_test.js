function getNumber(a, b) {
    return a + b;
}

function subtractNumber(a, b) {
    return a - b;
}

function doOperation(a, b, fn) {
    return fn(a, b);
}

var result = doOperation(5, 10, getNumber);
var result2 = doOperation(5, 10, subtractNumber);