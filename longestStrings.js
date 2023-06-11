// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// solution(inputArray) = ["aba", "vcd", "aba"].

function solution(inputArray) {
let longestLength = 0;

for(let i =0; i<inputArray.length; i++){
    let length = inputArray[i].length;
    longestLength = Math.max(longestLength, length);
}
let longestStrings = inputArray.filter((str) => str.length === longestLength);

return longestStrings;
}
