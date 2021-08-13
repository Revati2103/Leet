
function firstRepeatChar(word){

const charSet = new Set();


for (const i of word.toLowerCase().split("")) {
  

   if(charSet.has(i)){
       console.log(i);
       return i;
   }else {
    charSet.add(i);
   }
}

};

firstRepeatChar();