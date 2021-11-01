var majorityElement = function(nums) {
    const numsMap = new Map();
    const limiter = Math.floor(nums.length/3);
    const results = [];
    
    for(let i = 0; i< nums.length ; i++){
      numsMap.set(nums[i], numsMap.get(nums[i])+1 || 1)
    }
   
    for(let [key, value] of numsMap.entries()){
        if(value > limiter){
            results.push(key);
        }
    }
    console.log(results);
    return results;
};

nums = [3,2,3];
majorityElement(nums);