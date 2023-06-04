
// Write a function to repeat a string by a given prototype

function repeatStringTimes(str, n){
if(n < 0) return "";
if(n === 1) return str;
else return str + repeatStringTimes(str, n-1);
    
}
repeatStringTimes('hi', 2);
'hihi'


