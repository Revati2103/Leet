// In this lab, you will create a function to compute the running sum of a given 1D array. You’ll be given an input array nums. The running sum of this array is defined as runningSum[i] = sum(nums[0]...nums[i]). Your task is to write a function that will return the running sum of nums.

// Examples
// Input: nums = [1, 2, 3, 4] Output: [1, 3, 6, 10] Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// Input: nums = [1, 1, 1, 1, 1] Output: [1, 2, 3, 4, 5] Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

// Input: nums = [3, 1, 2, 10, 1] Output: [3, 4, 6, 16, 17]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function (nums) {

if(!nums.length) return [];
let result = [nums[0]];

for(let i = 1; i<nums.length ; i++){
    result.push(result[i-1] + nums[i]);
}
return result;

}

export default runningSum
