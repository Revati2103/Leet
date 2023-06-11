

Given an integer array, find the maximum product of its elements among all its subsets.

function maxSubarrayProd (arr){

    let prevMinProd = arr[0];
    let prevMaxProd = arr[0];
    let maxProd = arr[0];
    let currMinProd;
    let currMaxProd;

    for(let i = 1; i< arr.length; i++){
        
        currMaxProd = Math.max(prevMaxProd*arr[i] , arr[i], prevMinProd*arr[i]);
        currMinProd = Math.min(prevMaxProd*arr[i] , arr[i], prevMinProd*arr[i]);

        prevMaxProd = currMaxProd;
        prevMinProd = currMinProd;

        maxProd = Math.max(maxProd, currMaxProd);
        
    }
    return maxProd;
}
undefined
maxSubarrayProd([2,3,-2,4]);
6

