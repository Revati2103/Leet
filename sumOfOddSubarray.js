In this lab, you are tasked with implementing a function that calculates the sum of all possible odd-length subarrays of a given array of positive integers. A subarray is defined as a contiguous subsequence of the given array.

The function signature is:

// /**
//  * @param {number[]} arr
//  * @return {number}
//  */
// var sumOddLengthSubarrays = function(arr) {
    
// };
// Examples
// Input: arr = [1,4,2,5,3] Output: 58 Explanation: The odd-length subarrays of arr and their sums are: [1] = 1 [4] = 4 [2] = 2 [5] = 5 [3] = 3 [1,4,2] = 7 [4,2,5] = 11 [2,5,3] = 10 [1,4,2,5,3] = 15 If we add all these together we get 1+4+2+5+3+7+11+10+15=58

// Input: arr = [1,2] Output: 3 Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.

// Input: arr = [10,11,12] Output: 66

// Constraints
// 1 <= arr.length <= 100
// 1 <= arr[i] <= 1000


function sumOddLengthSubarrays(arr) {
  const n = arr.length;
  let prefixSum = new Array(n + 1).fill(0);
  let totalSum = 0;

  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + arr[i];
  }

  for (let len = 1; len <= n; len += 2) {
    for (let i = 0; i <= n - len; i++) {
      let j = i + len - 1;
      totalSum += prefixSum[j + 1] - prefixSum[i];
    }
  }

  return totalSum;
}
