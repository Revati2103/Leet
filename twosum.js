function twoSum(nums, target){
    let start = 0;
    let end = nums.length - 1;

    while(nums[start] + nums[end] !== target){

        if(nums[start] + nums[end] > target){
            end--;
        }else {
            start++;
        }
    }
    console.log(start+1, end+1);
return [start+1, end+1];
}

twoSum([2,7,11,15], 9);