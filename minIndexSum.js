// This function takes two arrays of strings, list1 and list2, and returns an array of strings containing the common strings with the least index sum. You should use ESM import/export throughout your code.

// Examples
// Consider the following examples:

// Example 1:

// let list1 = ["Shogun","Tapioca Express","Burger King","KFC"];
// let list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"];

// findRestaurant(list1, list2);
// Output: ["Shogun"]

// Explanation: The only common string is "Shogun".

// Example 2:

// let list1 = ["Shogun","Tapioca Express","Burger King","KFC"];
// let list2 = ["KFC","Shogun","Burger King"];

// findRestaurant(list1, list2);
// Output: ["Shogun"]

// Explanation: The common string with the least index sum is "Shogun" with index sum = (0 + 1) = 1.

// Example 3:

// let list1 = ["happy","sad","good"];
// let list2 = ["sad","happy","good"];

// findRestaurant(list1, list2);
// Output: ["sad","happy"]

// Explanation: There are three common strings: "happy" with index sum = (0 + 1) = 1, "sad" with index sum = (1 + 0) = 1, and "good" with index sum = (2 + 2) = 4. The strings with the least index sum are "sad" and "happy".

// Make sure to export the findRestaurant function so it can be used in the evaluation script.

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
const findRestaurant = function (list1, list2) {
    let minIndexSum = Infinity;
    let result = [];

    for(let i = 0; i<list1.length; i++){
        const indexInList2 = list2.indexOf(list1[i]);
        if(indexInList2 > -1){
            const indexSum = i + indexInList2;
            if(indexSum < minIndexSum){
                minIndexSum = indexSum;
                result = [list1[i]];
            }else if (indexSum === minIndexSum){
                result.push(list1[i]);
            }
        }
    }
    return result;
}

export default findRestaurant
