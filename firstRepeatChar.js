
function firstRepeatChar(word){

let repeatChar = "";
const charSet = new Set();

for (const i of word) {
   
   charSet.add(i.toLowerCase());
   
   if(charSet.has(i)){
       repeatChar = i;
       console.log(repeatChar);
       return repeatChar;
   }
}

};

firstRepeatChar('Apple');