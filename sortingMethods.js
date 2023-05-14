BUBBLE SORT

function bubbleSort(array){
    for (let i = array.length-1; i>=0 ; i--) {
        for (let j = 0 ; j< i ; j++ ){
            if(array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}
 
 

let myArray = [4,2,6,5,1,3];
bubbleSort(myArray);
console.log(myArray);


/*
    EXPECTED OUTPUT:
    ----------------
    [ 1, 2, 3, 4, 5, 6 ]

*/   

SELECTION SORT

function selectionSort(array){
    for (let i = 0 ; i< array.length-1; i++){
        let min = i;
        for (let j = i+1; j<array.length; j++){
            if(array[j] <array[min]){
                min = j;
            }
        }
        if(i !== min){
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
    return array;
}


let myArray = [4,2,6,5,1,3];
selectionSort(myArray);
console.log(myArray);


/*
    EXPECTED OUTPUT:
    ----------------
    [ 1, 2, 3, 4, 5, 6 ]

*/  

INSERTION SORT : 

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let temp = array[i];
        for (var j = i - 1; array[j] > temp && j > -1; j--) {
            array[j+1] = array[j];
        }
        array[j+1] = temp;
   }
   return array;
}

let myArray = [4,2,6,5,1,3];
insertionSort(myArray);
console.log(myArray);


/*
    EXPECTED OUTPUT:
    ----------------
    [ 1, 2, 3, 4, 5, 6 ]

*/  

MERGE SORT 


function merge(array1, array2){
    let i = 0;
    let j = 0;
    let combined = [];
    while(i<array1.length && j<array2.length){
        if(array1[i] < array2[j]){
            combined.push(array1[i]);
            i++;
        }else{
            combined.push(array2[j]);
            j++;
        }
    }
    while(i<array1.length){
        combined.push(array1[i]);
        i++;
    }
    while(j<array2.length){
        combined.push(array2[j]);
        j++;
    }
    return combined;
}



let myArray1 = [1,3,7,8];
let myArray2 = [2,4,5,6];
console.log( merge( myArray1, myArray2 ) );


/*
    EXPECTED OUTPUT:
    ----------------
    [ 1, 2, 3, 4, 5, 6, 7, 8 ]

*/  





MERGE SORT

Time Complexity : O(n log (n))




function merge(array1, array2) {
    let combined = [];
    let i = 0;
    let j = 0;
    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            combined.push(array1[i]);
            i++;
        } else {
            combined.push(array2[j]);
            j++;
        }
    }
    while (i < array1.length) {
        combined.push(array1[i]);
        i++;
    }
    while (j < array2.length) {
        combined.push(array2[j]);
        j++;
    }
    return combined;
}


function mergeSort(array){
    if(array.length === 1) return array;
    let midIndex = Math.floor(array.length/2);
    let left = mergeSort(array.slice(0,midIndex));
    let right = mergeSort(array.slice(midIndex));
    return merge(left,right);
}



let originalArray = [3,1,4,2];
let sortedArray = mergeSort( originalArray );

console.log( "Original Array:", originalArray );
console.log( "\nSorted Array:", sortedArray );


/*
    EXPECTED OUTPUT:
    ----------------
    Original Array: [ 3, 1, 4, 2 ]

    Sorted Array: [ 1, 2, 3, 4 ]

*/  


