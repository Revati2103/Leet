// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example
// n = 7, ar =  [1,2,1,2,1,3,2] 

// There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is 2.


function sockMerchant(n, ar) {
  let pairs = 0;
  let numMap = new Map();

  for (let i = 0; i < n; i++) {
    numMap.has(ar[i]) ? numMap.set(ar[i], numMap.get(ar[i]) + 1) : numMap.set(ar[i], 1);
  }
for (let [key, value] of numMap.entries()) {
 
  let numPair = Math.floor(value / 2);
    pairs += numPair;
}
  

  return pairs;
}
