function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;
    
    if(!str1.length) return true;
    
    while(j<str2.length){
        if(str1[j] === str2[i])  i++;
        
        if(i == str1.length) return true;
        j++;
    
            
    }
    return false;
  }

//   isSubsequence('hello', 'hello world') => true;
//   isSubsequence('sing', 'sting') => true;
//   isSubsequence('abc' , 'acb') => false;