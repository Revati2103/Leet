// Sum of Multiples of 3, 5, and 7
// In this lab, you will be working on a function sumOfMultiples which takes a positive integer n and returns the sum of all integers in the range [1, n] inclusive that are divisible by 3, 5, or 7.

/**
 * @param {number} n
 * @return {number}
 */
export const sumOfMultiples = function (n) {
    let sum = 0;

    for(let i = 1; i<=n; i++){
        if(i%3 ===0 || i%5 === 0 || i%7 === 0){
            sum += i;
        }
    }
    return sum;
}
