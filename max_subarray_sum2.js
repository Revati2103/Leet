// Calculate and return max sun of elements in array .

function maxSubArraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;

    if(arr.length < num) return null;

    for(let i = 0; i<num ; i++){
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for(let i = num; i< arr.length; i++){
        tempSum = tempSum + arr[i] - arr[i-num];
        maxSum = Math.max(tempSum, maxSum);
    }

    return maxSum;
}

maxSubArraySum([1,2,3,4,5], 2)
