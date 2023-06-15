// Given a rectangular matrix of characters, add a border of asterisks(*) to it.
// Example For

// picture = ["abc",
//            "ded"]
// the output should be

// solution(picture) = ["*****",
//                      "*abc*",
//                      "*ded*",
//                      "*****"]

function solution(picture) {
 
// Border length will be length of chars + 2 for an '*' on each end   
const borderLength = picture[0].length + 2;

//Generate a border pattern
const border = '*'.repeat(borderLength);

// Add a border to the top and bottom 
picture.unshift(border);
picture.push(border);

// Add '*' to the left and right ends for every picture excluding the top and bottom 
for(let i = 1; i< picture.length - 1; i++){
    picture[i] = `*${picture[i]}*`
}
return picture
}

