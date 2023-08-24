// In this lab, you will be given two arrays arr1 and arr2, where the elements of arr2 are distinct, and all elements in arr2 are also in arr1. Your task is to sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

// This lab will focus on testing your ability to implement an algorithm that is able to correctly process and manipulate the given arrays following the challenge rules. You will write a function relativeSortArray that takes two parameters:

// arr1: an array of integers
// arr2: an array of integers
// The function should return the sorted array arr1 following the challenge rules described above.

// Examples
// Example 1:

// Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6] Output: [2,2,2,1,4,3,3,9,6,7,19]

// Example 2:

// Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6] Output: [22,28,8,6,17,44]

// Constraints:

// 1 <= arr1.length, arr2.length <= 1000
// 0 <= arr1[i], arr2[i] <= 1000
// All the elements of arr2 are distinct.
// Each arr2[i] is in arr1.


function relativeSortArray(arr1, arr2) {
    const freqCount = new Map();

    for (const num of arr1) {
        freqCount.set(num, (freqCount.get(num) || 0) + 1);
    }

    const result = [];

    for (const num of arr2) {
        while (freqCount.get(num) > 0) {
            result.push(num);
            freqCount.set(num, freqCount.get(num) - 1);
        }
    }

    for (const [num, frequency] of freqCount) {
        while (frequency > 0) {
            result.push(num);
            freqCount.set(num, frequency - 1);
        }
    }

    return result;
}

// Test cases
console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6])); // Output: [2,2,2,1,4,3,3,9,6,7,19]
console.log(relativeSortArray([28,6,22,8,44,17], [22,28,8,6])); // Output: [22,28,8,6,17,44]
