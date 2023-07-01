function checkIsPalindrome(str){

  let charMap = new Map();
  let oddCount = 0;

   str.split('').forEach(char => {
       charMap.has(char) ? charMap.set(char , charMap.get(char) + 1) : charMap.set(char , 1)
   })

if(!str.length%2 === 0){
    for(const [key, value] of charMap){
        if(value % 2 !== 0){
            oddCount++;
             if(oddCount > 1) return false;   
        }
    }
}
   
  return true;  
}

checkIsPalindrome("cadac");
true
checkIsPalindrome("abba");
true
