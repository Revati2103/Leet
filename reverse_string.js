

//Solution 1 - using in built function
// function reverse(str){

//    return str
//    .split('')
//    .reverse()
//    .join('');

// }
// reverse('revati');

//Solution 2 - using a for loop

function reverse(str){
    let reverse = "";
    for(let i = str.length -1 ; i>= 0; i--){
        reverse = reverse + str[i];
    }
    console.log(reverse);
    return reverse;
   
}

reverse('I am a girl');
