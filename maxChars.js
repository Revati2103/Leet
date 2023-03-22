function maxChars(str){

    //return the count of max repeating character in a string
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        if (charMap[char]){
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }
   for (let char in charMap) {
      if(charMap[char] > max) {
          max = charMap[char];
          maxChar = char;
      }
   }
   console.log(maxChar);
}

maxChars("aaaaaaaa12");

