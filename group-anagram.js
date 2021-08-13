var groupAnagrams = function (strs) {
    const anagrams = new Map();
    
    for(str of strs) {
        const sortedLetters = str.split('').sort().join('');
        
        if(anagrams.has(sortedLetters)) 
            anagrams.get(sortedLetters).push(str);
        else 
            anagrams.set(sortedLetters, [str]);
    }
    
   console.log(Array.from(anagrams.values()));
   return Array.from(anagrams.values());
   
};


strs = ["eat","tea","tan","ate","nat","bat"];
groupAnagrams(strs);