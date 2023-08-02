// Example 1:

// Input: nums = [0,1,0,3,12] Output: [1,3,12,0,0]

// Example 2:

// Input: nums = [1,0,0,4,5] Output: [1,4,5,0,0]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
export function moveZeroes(nums) {
    let nonZeroIndex = 0;

    for(let i = 0; i<nums.length; i++){
        if(nums[i] !== 0){
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex ++;
        }
    }

    for(let i = nonZeroIndex; i<nums.length; i++){
        nums[i] = 0;
    }
}
