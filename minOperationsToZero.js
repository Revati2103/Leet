// Find the min no of operations required to make all elements in the array to 0. 
// You are allowed to substract a fixed value from each non zero array element in each iteration 

function minOperations(nums){

    let operations = 0;

    while(true) {

        let minNonZeroNumber = Math.min(...nums.filter((num) => num > 0));

        if(minNonZeroNumber === Infinity) break;
        nums = nums.map((num) => num - (num > 0 ? minNonZeroNumber : 0 ));
        operations++;
    }

    return operations;
}
