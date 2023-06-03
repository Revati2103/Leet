// Find second largest element in an array 

function secondLargest(arr){

    arr = arr.sort((a,b) => (a-b));
    return arr[arr.length -2 ]
}
