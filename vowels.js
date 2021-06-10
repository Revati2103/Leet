function vowels(str){
    let count = 0;
    for (const char of str.toLowerCase().split("")) {
        
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === "u"){
            count ++;
    
        }
        
    }
    console.log(count);
    return count;
}

vowels('Hi There! ');