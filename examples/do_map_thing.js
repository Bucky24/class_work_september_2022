/*
Write a function that takes an array of numbers and a function as parameters. The function parameter should do something to a numbers (increment, double, decrement, etc) and return the result. Your function should return the array that results from applying the function parameter to each element in the number array. 

  Ex:
  Input: [1,2,3]  function(num){return num * 2*}
  Output: [2,4,6]

  Input: [1,2,3]  function(num){return num + 1}
  Output: [2,3,4]

  Input: [1,2,3] function(num) {return num /2}
  Output: [.5, 1. 1.5]

  Input: [1,2,3] function(num) {return num - 2}
  Output: [-1, 0, 1]
  */

const doThing = (array, cb) => array.map(cb);

console.log(doThing([1,2,3], (num) => num * 2));