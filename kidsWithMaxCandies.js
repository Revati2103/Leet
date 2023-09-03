// In this lab, you will be implementing a function called kidsWithCandies, which will determine if a kid will have the greatest number of candies after receiving extra candies. This function takes an integer array candies, representing the number of candies each kid has, and an integer extraCandies, denoting the number of extra candies that you have. The function should return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extra candies, they will have the greatest number of candies among all kids, or false otherwise.

// Multiple kids can have the greatest number of candies.

// Example
// import { kidsWithCandies } from './index.js';

// const candies = [2, 3, 5, 1, 3];
// const extraCandies = 3;
// const result = kidsWithCandies(candies, extraCandies);
// console.log(result); // Output: [true, true, true, false, true]
// Explanation
// If you give all extraCandies to:

// Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
// Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
// Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
// Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
// Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
// Constraints
// n == candies.length
// 2 <= n <= 100
// 1 <= candies[i] <= 100
// 1 <= extraCandies <= 50

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
export const kidsWithCandies = function (candies, extraCandies) {

    let maxCount = Math.max(...candies)
    let result = []

    for(let i = 0; i< candies.length; i++){
        let currMax = candies[i] + extraCandies;
        if(currMax >= maxCount) {
            result.push(true)
        }else {
            result.push(false)
        }
    }
    return result;
}

