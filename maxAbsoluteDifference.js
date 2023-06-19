// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

// Example

// For inputArray = [2, 4, 1, 0], the output should be
// solution(inputArray) = 3.

function solution(inputArray) {
    let maxDifference = 0;
    let i = 0;
    
    for(let j = 1; j<inputArray.length; j++){
        let diff = Math.abs(inputArray[j] - inputArray[i])
        if(diff > maxDifference){
            maxDifference = diff;
            i++;
        }
    }
    return maxDifference;

}


