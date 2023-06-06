
Check if a string can be rearranged into a Palindrome 


function canFormPalindrome(str) {
  const freqMap = new Map();

  // Create frequency map
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  let oddCount = 0;

  // Count odd occurrences
  for (const count of freqMap.values()) {
    if (count % 2 !== 0) {
      oddCount++;
    }
  }

  // Check conditions based on string length
  if (str.length % 2 === 0) {
    return oddCount === 0;
  } else {
    return oddCount === 1;
  }
}


canFormPalindrome('aabbcc')
true

