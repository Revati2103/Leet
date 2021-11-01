// var isMajorityElement = function(nums, target) {
    
//     let count = 0;
//     let result;
    
//     for(let i = 0; i< nums.length ; i++){
        
//         if (nums[i] === target){
//             count++;
       
//              }

//     if(count > nums.length/2){
//         result = true;

//     }else{
    
//         result = false;
//     }
//     }
    
//     return result;
// };

//Using Map
var isMajorityElement = function(nums, target) {
    var map = {};
    
    for(var i=0 ; i < nums.length ; i++) {
        if(!(nums[i] in map)) {
            map[nums[i]] = 1;
        } else{
             map[nums[i]] ++;
        }
    }
    
    if(map[target] > Math.floor(nums.length/2)) {
        return true;
    } else {
        return false;
    }

};

//Sample input

// nums = [2,4,5,5,5,5,5,6,6];
// target = 5;
// isMajorityElement(nums, target);

nums = [10,100,101,101];
target = 101;
isMajorityElement(nums, target);
