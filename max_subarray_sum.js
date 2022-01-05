var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let currSum = maxSum;
    
    for(let i = 1; i< nums.length ; i++){
        currSum = Math.max(nums[i]+ currSum , nums[i]);
        maxSum = Math.max(currSum, maxSum);
    }
    
    return maxSum;
};