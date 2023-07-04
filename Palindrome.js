// check if a string is a palindrome.

function isPalindrome(str){

let revstr = "";

for(var i = str.length - 1 ; i>=0 ; i--){
revstr = revstr + str[i];

};


if(revstr === str){

console.log('Palindrome');
}else{

console.log('Not a Palindrome');
};

};
