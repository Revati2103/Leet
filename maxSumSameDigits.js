// You are given a 0-indexed integer array nums. You have to find the maximum sum of a pair of numbers from nums such that the maximum digit in both numbers are equal.
// Return the maximum sum or -1 if no such pair exists.
// Example 1:
// Input: nums = [51,71,17,24,42]
// Output: 88
// Explanation: 
// For i = 1 and j = 2, nums[i] and nums[j] have equal maximum digits with a pair sum of 71 + 17 = 88. 
// For i = 3 and j = 4, nums[i] and nums[j] have equal maximum digits with a pair sum of 24 + 42 = 66.
// It can be shown that there are no other pairs with equal maximum digits, so the answer is 88.

function maxSum(nums) {
    let digitGroups = new Map();

    for (let num of nums) {
        let maxDigit = Math.max(...num.toString().split('').map(Number));
        if (!digitGroups.has(maxDigit)) {
            digitGroups.set(maxDigit, []);
        }
        digitGroups.get(maxDigit).push(num);
    }

    let maximumSum = -1;

    for (let group of digitGroups.values()) {
        if (group.length >= 2) {
            group.sort((a, b) => b - a);
            maximumSum = Math.max(maximumSum, group[0] + group[1]);
        }
    }
    return maximumSum;
}
