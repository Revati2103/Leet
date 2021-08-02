
function firstRepeatChar(word){

let repeatChar = "";
const charSet = new Set();


for (const i of word.toLowerCase().split("")) {
  

   if(charSet.has(i)){
       repeatChar = i;
       console.log(repeatChar);
       return repeatChar;
   }else {
    charSet.add(i);
   }
}

};

firstRepeatChar('Chandragiri');