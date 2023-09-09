// Minimum Distance to Target Element Lab
// Easy
// 7
// 1

// In this lab, you will implement a function called getMinDistance to find the minimum distance to a target element in an array. The function should take an integer array nums (0-indexed) and two integers target and start as input, and return the minimized value of abs(i - start) where nums[i] == target. Note that abs(x) is the absolute value of x.

// It is guaranteed that target exists in nums.

// Function Signature
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @param {number} start
//  * @return {number}
//  */

// Example 1:

// Input: nums = [1,2,3,4,5], target = 5, start = 3 Output: 1 Explanation: nums[4] = 5 is the only value equal to target, so the answer is abs(4 - 3) = 1.

// Example 2:

// Input: nums = [1], target = 1, start = 0 Output: 0 Explanation: nums[0] = 1 is the only value equal to target, so the answer is abs(0 - 0) = 0.

// Example 3:

// Input: nums = [1,1,1,1,1,1,1,1,1,1], target = 1, start = 0 Output: 0 Explanation: Every value of nums is 1, but nums[0] minimizes abs(i - start), which is abs(0 - 0) = 0.

export function getMinDistance(nums, target, start) {
    for(let i = 0; i<nums.length; i++){
        if(nums[i] === target){
            return Math.abs(i-start)
        }
    }
}
