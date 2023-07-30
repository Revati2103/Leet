// Maximum Difference Between Increasing Elements
// Easy
// 5
// 80.6% Acceptance
// In this lab, you will find the maximum difference between two elements of a given 0-indexed integer array nums, where the two elements must satisfy the condition nums[i] < nums[j] for 0 <= i < j < n.

// The function signature is as follows:

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maximumDifference = function(nums) {

// };
// Requirements
// You must use ESM import/export syntax everywhere in your solution.
// If your code depends on any external libraries, ensure that they are added to your package.json file.
// Export any functions, variables, or other code elements that are necessary for the evaluation script to properly test your solution.
// Examples
// Example 1
// Input: nums = [7, 1, 5, 4]

// Output: 4

// Explanation:

// The maximum difference occurs with i = 1 and j = 2, nums[j] - nums[i] = 5 - 1 = 4.

// Note that with i = 1 and j = 0, the difference nums[j] - nums[i] = 7 - 1 = 6, but i > j, so it is not valid.

// Example 2
// Input: nums = [9, 4, 3, 2]

// Output: -1

// Explanation:

// There is no i and j such that i < j and nums[i] < nums[j].

// Example 3
// Input: nums = [1, 5, 2, 10]

// Output: 9

// Explanation:

// The maximum difference occurs with i = 0 and j = 3, nums[j] - nums[i] = 10 - 1 = 9.

/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumDifference = function (nums) {
    let max = -1;
    let initialElement = nums[0];
    
    for(let j = 1; j< nums.length; j++){
       if(nums[j] > initialElement ){
        max = Math.max(max, nums[j] - initialElement);
       }else {
        initialElement = nums[j];
       }
    }
    return max;
}

export default maximumDifference
