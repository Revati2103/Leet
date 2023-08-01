// Longest Continuous Increasing Subsequence
// Easy
// 3
// 1
// 80.6% Acceptance
// In this lab, you will solve a problem related to finding the longest continuous increasing subsequence in an unsorted array of integers. The primary goal is to return the length of this longest continuous increasing subsequence (subarray). This subsequence must be strictly increasing.

// A continuous increasing subsequence is defined by two indices l and r (l < r) such that it is [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] and for each l <= i < r, nums[i] < nums[i + 1].

// Problem Description:
// You are given an unsorted array of integers nums. Your task is to implement the findLengthOfLCIS function which takes this nums array as its input and returns the length of the longest continuous increasing subsequence (subarray), as explained above.

// Function signature:
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findLengthOfLCIS = function(nums) {
    
// };
// Constraints:
// 1 <= nums.length <= 10^4
// -10^9 <= nums[i] <= 10^9
// Examples:
// Example 1:
// Input: nums = [1,3,5,4,7]

// Output: 3

// Explanation: The longest continuous increasing subsequence is [1,3,5] with length 3. Even though [1,3,5,7] is an increasing subsequence, it is not continuous as elements 5 and 7 are separated by element 4.

// Example 2:
// Input: nums = [2,2,2,2,2]

// Output: 1

// Explanation: The longest continuous increasing subsequence is [2] with length 1. Note that it must be strictly increasing.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
   let currLength = 0;
   let maxLength = 0;

   for(let i = 0; i<nums.length; i++){
    if(i === 0 || nums[i] > nums[i-1]){
        currLength++;
        maxLength = Math.max(currLength, maxLength);
    }else {
        currLength = 1;
    }
   }
   return maxLength;
}

export { findLengthOfLCIS }
