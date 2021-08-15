var isMajorityElement = function(nums, target) {
    
    let count = 0;
    
    for(let i = 0; i< nums.length ; i++){
        
        if (nums[i] === target){
            count++;
       
             }

    if(count > nums.length/2){
        console.log("Is majority");
        return true;
    }else{
        console.log("Is not a majority");
        return false;
    }
    }
};

// nums = [2,4,5,5,5,5,5,6,6];
// target = 5;
// isMajorityElement(nums, target);

nums = [10,100,101,101];
target = 101;
isMajorityElement(nums, target);
