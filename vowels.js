function vowels(str){
    let count = 0;
    const checker = ['a','e','i','o','u'];
    for (const char of str.toLowerCase()) {
        
        if(checker.includes(char)){
            count++;
        }
    }
    console.log(count);
    return count;
}

vowels('Hi There! ');