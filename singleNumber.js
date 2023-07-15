     

// Problem Description
// Given an array of integers (nums), your task is to find the single element that appears only once in the array. All the other elements appear twice in the array.
//You must develop a solution with linear runtime complexity and use only constant extra space. Your function should work on a non-empty array of integers nums, where every element appears twice except for one. Find that single one.

// Examples
// Input: nums = [2,2,1] Output: 1

// Input: nums = [4,1,2,1,2] Output: 4

// Input: nums = [1] Output: 1

function singleNumber(nums){

    let numMap = new Map()

    for(let i = 0; i<nums.length; i++) {
        numMap.has(nums[i]) ? numMap.set(nums[i], numMap.get(nums[i]) + 1) : numMap.set(nums[i] , 1);
    }

    console.log(numMap.values());
    
    for (const [key, val] of numMap.entries()) {
    if (val === 1) {
      return key;
    }
    }
}
