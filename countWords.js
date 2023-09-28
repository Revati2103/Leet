// Count Common Words Occurring Once in Two Arrays.
// In this lab, you will be working with two string arrays, words1 and words2. Your task is to create a function countWords that returns the number of strings that appear exactly once in each of the two arrays.

// Your code should be written using ESM import/export.

// Examples
// Here are some examples to help you understand the problem better:

// Example 1:

// Input: words1 = ["leetcode", "is", "amazing", "as", "is"], words2 = ["amazing", "leetcode", "is"] Output: 2

// Explanation:

// "leetcode" appears exactly once in each of the two arrays. We count this string.
// "amazing" appears exactly once in each of the two arrays. We count this string.
// "is" appears in each of the two arrays, but there are 2 occurrences of it in words1. We do not count this string.
// "as" appears once in words1, but does not appear in words2. We do not count this string. Thus, there are 2 strings that appear exactly once in each of the two arrays.
// Example 2:

// Input: words1 = ["b", "bb", "bbb"], words2 = ["a", "aa", "aaa"] Output: 0

// Explanation: There are no strings that appear in each of the two arrays.

// Example 3:

// Input: words1 = ["a", "ab"], words2 = ["a", "a", "a", "ab"] Output: 1

// Explanation: The only string that appears exactly once in each of the two arrays is "ab".

function countWords(words1,words2){

     const commonInWords1 = words1.filter(word => words2.includes(word));
     const commonInWords2 = words2.filter(word => words1.includes(word));

    let map1 = new Map();
    let map2 = new Map();

    commonInWords1.forEach((word) => {
        map1.has(word) ? map1.set(word, map1.get(word) + 1) : map1.set(word , 1)
    });


     commonInWords2.forEach((word) => {
        map2.has(word) ? map2.set(word, map2.get(word) + 1) : map2.set(word , 1)
    });

    let count = 0;

map1.forEach((value, key) => {
    if(value === 1 && map2.has(key) && map2.get(key) === 1){
        count ++;
    }
})
    
   return count; 

}
