function anagrams(string1,string2){

    let charMap1 = buildCharMap(string1);
    let charMap2 = buildCharMap(string2);

    //If lengths are different , they can't be anagrams.
    
    if(Object.keys(charMap1).length !== Object.keys(charMap2).length){
        console.log('Not an anagram');
        return false;
        
    }

    for(let char in charMap1){
        if(charMap1[char] !== charMap2[char]){
            console.log('Not an anagram');
            return false;
            
        }
    }
    console.log('Anagram');
    return true;
   
}

function buildCharMap(str){
    const charMap = {};
    for (const char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}

anagrams("good morning", "good evening");
