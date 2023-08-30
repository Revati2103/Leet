var firstUniqChar = function(s) {
    let chars = s.split('');
    let charMap = new Map();

    for(let i = 0; i<chars.length; i++){
        charMap.set(chars[i] , (charMap.get(chars[i])|| 0 ) + 1 )
    }

    for(let i=0; i<chars.length; i++){
        if(charMap.get(chars[i]) === 1){
            return i;
        }
    }
    return -1;
};

