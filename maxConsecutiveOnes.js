/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxOnes = 0;
    let currMax = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            maxOnes++;
        } else {
            currMax = Math.max(currMax, maxOnes);
            maxOnes = 0;
        }
    }

    currMax = Math.max(currMax, maxOnes);

    return currMax;
};
