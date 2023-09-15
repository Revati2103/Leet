// Three Consecutive Odds Lab
// Easy
// 7
// 81.0% Acceptance
// In this lab, you will be working with a coding problem that focuses on finding three consecutive odd numbers in a given integer array. You have to implement a function threeConsecutiveOdds(arr) that takes an integer array arr as an input and returns true if there are three consecutive odd numbers in the array. If there are no consecutive odd numbers, the function must return false.

// Problem Description
// Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.

// Example 1:

// Input: arr = [2,6,4,1] Output: false Explanation: There are no three consecutive odds in the given array.

// Example 2:

// Input: arr = [1,2,34,3,4,5,7,23,12] Output: true Explanation: [5,7,23] are three consecutive odds in the given array.

// Constraints:

// 1 <= arr.length <= 1000
// 1 <= arr[i] <= 1000

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const threeConsecutiveOdds = function (arr) {
   for(let i = 0; i<arr.length-2; i++){
    if(arr[i]%2 !== 0 && arr[i+1]%2 !== 0 && arr[i+2] % 2 !== 0){
        return true;
    }
   }
   return false;
}

export { threeConsecutiveOdds }
