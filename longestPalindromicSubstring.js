function expandAroundCenter(s,left,right){
     while(left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.substring(left + 1, right);
 }
var longestPalindrome = function(s) {

    let longest = "";

    for(let i=0; i<s.length; i++){
            const palindromeOdd = expandAroundCenter(s, i,  i);
            if(palindromeOdd.length > longest.length){
                longest = palindromeOdd;
            }
            const palindromeEven = expandAroundCenter(s, i,  i+1);
            if(palindromeEven.length > longest.length){
                longest = palindromeEven;
            }
    }


   return longest;
};
