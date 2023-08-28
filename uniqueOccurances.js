// Unique Number of Occurrences Lab
// Easy
// 28.6% Acceptance
// This lab focuses on testing your ability to implement a function that checks the unique number of occurrences in an array of integers. The primary goal of the lab is to return true if the number of occurrences of each value in the given array is unique or false otherwise.

// In this lab, you'll be provided with an initial setup that includes a function called uniqueOccurrences(arr) which takes an array of integers as input.

// Task
// Your task is to implement and export the uniqueOccurrences function that fulfills the following requirements:

// The input arr is an array of integers, with the length between 1 to 1000, and values ranging from -1000 to 1000.
// The function should return a boolean value based on the uniqueness of occurrences of each integer in the array.
// Examples
// Example 1:

// const arr1 = [1, 2, 2, 1, 1, 3];
// const output1 = uniqueOccurrences(arr1);
// console.log(output1); // true
// Explanation: The value 1 occurs 3 times, the value 2 occurs 2 times, and the value 3 occurs 1 time. No two values have the same number of occurrences.

// Example 2:

// const arr2 = [1, 2];
// const output2 = uniqueOccurrences(arr2);
// console.log(output2); // false
// Example 3:

// const arr3 = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0];
// const output3 = uniqueOccurrences(arr3);
// console.log(output3); // true

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function (arr) {
     let numMap = new Map();

    for(let i = 0; i< arr.length; i++){
        numMap.set(arr[i], (numMap.get(arr[i]) || 0) + 1 )
    }

    return numMap.size === new Set(numMap.values()).size
}

export default uniqueOccurrences
