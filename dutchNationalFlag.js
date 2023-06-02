function sortZerosAndOnes(arr){

    let low = 0;
    let high = arr.length - 1;

    while(low < high){
        if(arr[low] === 0){
            low++;
        }else {
            [arr[low],arr[high]] = [arr[high],arr[low]];
            high--;
        }
    }
    return arr;
}
