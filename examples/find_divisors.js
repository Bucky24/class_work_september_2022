// given an integer, write a function that returns an array of its divisors

function findDivisors(num) {
    const divisors = [];

    for (let i=2;i<=num/2;i++) {
        const result = num / i;
        if (result === Math.floor(result)) {
            divisors.push(i);
        }
    }

    return divisors;
}

console.log(findDivisors(1200)); // 2, 3, 4, 6