// Examples:

// Example 1:

// sortPeople(["Mary","John","Emma"], [180,165,170])
// // Output: ["Mary","Emma","John"]
// // Explanation: Mary is the tallest, followed by Emma and John.
// Example 2:

// sortPeople(["Alice","Bob","Bob"], [155,185,150])
// // Output: ["Bob","Alice","Bob"]
// // Explanation: The first Bob is the tallest, followed by Alice and the second Bob.
// Constraints:

// n == names.length == heights.length
// 1 <= n <= 103
// 1 <= names[i].length <= 20
// 1 <= heights[i] <= 105
// names[i] consists of lower and upper case English letters.
// All the values of heights are distinct.

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
export const sortPeople = function (names, heights) {
    const people = names.map((name, index) => ({ name, height: heights[index] }));

 people.sort((a,b)=> b.height - a.height);
    const sortedNames = people.map((item) => item.name); 
    return sortedNames;
}
