function firstNonRepeatingChar(str){
let charMap = new Map();

for(let i = 0; i<str.length; i++){
    let c = str.charAt(i);
    if(charMap.has(c)){
        charMap.set(c, charMap.get(c)+1);
    }else{
        charMap.set(c, 1);
    }
}
for(let i = 0; i< str.length; i++){
    let c = str.charAt(i);
    if(charMap.get(c)==1) {
        console.log(c);
        return c;
       
    
    }
}

return '_';
}

firstNonRepeatingChar('aaabcccdeeef');