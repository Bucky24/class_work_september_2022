/*
Pre-Class Drill: Number Theory! My favorite subject in math!

Counting Primes:
Given an integer n, return the number of prime numbers that are strictly less than n.

Example 1:

Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

Example 2:

Input: n = 0
Output: 0

Example 3:

Input: n = 1
Output: 0
*/

function isPrime(num) {
    for (let i=2;i<=num/2;i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function countPrimes(num) {
    let primeCount = 0;
    for (let i=2;i<num;i++) {
        if (isPrime(i)) {
            console.log(i);
            primeCount ++;
        }
    }

    return primeCount;
}

console.log(countPrimes(100));