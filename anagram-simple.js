function isAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let char of str1.split('')){
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1
    }
    for(let char of str2.split('')){
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1        
    }
   
    for(let char in frequencyCounter1){
        if(!(char in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[char] !== frequencyCounter1[char]){
            return false
        }
    }
    return true
}