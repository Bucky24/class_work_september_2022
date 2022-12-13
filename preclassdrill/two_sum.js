/*
PRE-CLASS DRILL:

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

Ex. 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Ex. 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]
*/

function twoSum(integers, target) {
    for (let i=0;i<integers.length;i++) {
        for (let j=i+1;j<integers.length;j++) {
            if (integers[i] + integers[j] === target) {
                return [i, j];
            }
        }
    }

    return [];
}

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));