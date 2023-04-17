//merge sort

function mergeSort(arr){
if(arr.length === 1){
    return arr;
}
const center = Math.floor(arr.length /2);
const left = arr.splice(0,center);
const right = arr.splice(center);

return merge (mergeSort(left), mergeSort(right));
}

function merge(left,right){
    const arr = [];

    while(left.length && right.length){
        if(left[0]> right[0]){
            arr.push(left.shift());
        } else {
            arr.push(right.shift);
        }
    }

    return [...arr, ...left, ...right];
}
