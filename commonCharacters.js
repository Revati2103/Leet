// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// solution(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".


function solution(s1, s2) {
  const charCount = {}; // Object to store character frequencies

  // Count the frequency of characters in s1
  for (const char of s1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let commonCount = 0;

  // Iterate over s2 and check if characters exist in charCount
  for (const char of s2) {
    if (charCount[char] > 0) {
      commonCount++;
      charCount[char]--;
    }
  }

  return commonCount;
}
