var sortedSquares = function(nums) {
    let leftInd = 0, rightInd = nums.length - 1, result = [];
  
    for (let i = nums.length - 1; i >= 0; i--) {
      let left = Math.abs(nums[leftInd]), right = Math.abs(nums[rightInd]);
  
      if (left <= right) { result[i] = right * right; rightInd--; }
      else if (left > right) { result[i] = left * left; leftInd++; }
    }
   
    return result;
  
  };




