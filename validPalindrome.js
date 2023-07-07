// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

var isPalindrome = function(s) {
   
    let formattedString = s.split(" ").map(word => word.replace(/[^a-zA-Z0-9\s]/g, '').toLowerCase()).join("");
 console.log(formattedString);

    let reversedString = formattedString.split('').reverse().join('');
    console.log(reversedString);
    
    return formattedString === reversedString;
};
