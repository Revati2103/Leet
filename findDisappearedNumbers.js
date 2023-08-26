// Find All Disappeared Numbers in an Array Lab
// Easy
// 2
// 50.0% Acceptance
// In this lab, you will be tasked with finding all the disappeared numbers in an array. The array nums will contain n integers where each number, nums[i], is in the range [1, n]. Your task is to return an array of all the integers within the range [1, n] that do not appear in nums. Use the ESM (ECMAScript Module) import/export for this lab.

// Lab Description
// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1] Output: [5,6]

// Example 2:

// Input: nums = [1,1] Output: [2]

// Example 3:

// Input: nums = [2,2,3,4,5,6,7,8] Output: [1]

// Constraints:
// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n

/**
 * @param {number[]} nums
 * @return {number[]}
 */
export function findDisappearedNumbers(nums) {
   const uniqueNums = Array.from(new Set(nums));
    let allNums = [];
    let result = [];
    

    for(let i = 1; i<= nums.length; i++){
        allNums.push(i)
    }
allNums.forEach((num) => {
    if(!uniqueNums.includes(num)){
        result.push(num)
    }
})
return result;
}
