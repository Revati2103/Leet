// Count Common Words Occurring Once in Two Arrays
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

function findWords(words) {
  let output = [];

  let firstRow = "qwertyuiop";
  let secondRow = "asdfghjkl";
  let thirdRow = "zxcvbnm";

  let firstRowMap = new Map(Array.from(new Set(firstRow), char => [char, 1]));
  let secondRowMap = new Map(Array.from(new Set(secondRow), char => [char, 2]));
  let thirdRowMap = new Map(Array.from(new Set(thirdRow), char => [char, 3]));

  for (const word of words) {
    let row;
    let isSingleRow = true;

    for (const char of word.toLowerCase()) {
      if (!row) {
        if (firstRowMap.has(char)) row = firstRowMap.get(char);
        else if (secondRowMap.has(char)) row = secondRowMap.get(char);
        else if (thirdRowMap.has(char)) row = thirdRowMap.get(char);
      } else {
        if (
          (row === 1 && !firstRowMap.has(char)) ||
          (row === 2 && !secondRowMap.has(char)) ||
          (row === 3 && !thirdRowMap.has(char))
        ) {
          isSingleRow = false;
          break;
        }
      }
    }

    if (isSingleRow) {
      output.push(word);
    }
  }

  return output;
}


