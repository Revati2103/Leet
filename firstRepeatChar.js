
function firstRepeatChar(word){

let repeatChar = "";

for (const i of word) {
   const charSet = new Set();
   charSet.add(i.toLowerCase());
   if(charSet.has(i)){
       repeatChar = i;
       console.log(repeatChar);
       return repeatChar;
   }
}

};

firstRepeatChar('Apple');