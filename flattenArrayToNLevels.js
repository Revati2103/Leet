// A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n.

// Examples
// Example 1:

// const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
// const n = 0;
// const result = flat(arr, n);
// console.log(result);
// // Output: [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
// Explanation: Passing a depth of n=0 will always result in the original array. This is because the smallest possible depth of a subarray (0) is not less than n=0. Thus, no subarray should be flattened.

// Example 2:

// const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
// const n = 1;
// const result = flat(arr, n);
// console.log(result);
// // Output: [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]
// Explanation: The subarrays starting with 4, 7, and 13 are all flattened. This is because their depth of 0 is less than 1. However, [9, 10, 11] remains unflattened because its depth is 1.

// Example 3:

// const arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
// const n = 2;
// const result = flat(arr, n);
// console.log(result);
// // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// Explanation: The maximum depth of any subarray is 1. Thus, all of them are flattened.

/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
export const flat = function (arr, n) {
  return n === 0
    ? arr
    : arr.flatMap((item) => (Array.isArray(item) && n > 0 ? flat(item, n - 1) : item));
};
