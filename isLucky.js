// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be
// solution(n) = true;
// For n = 239017, the output should be
// solution(n) = false.

function isLucky(s){

    const digits = s.toString().split('');
    const mid = digits.length/2;

    const leftSum = digits.slice(0, mid).reduce((sum, digit) => sum + parseInt(digit), 0);
    
    const rightSum = digits.slice(mid).reduce((sum, digit) => sum + parseInt(digit), 0);

    return leftSum === rightSum;
}

isLucky(1234);
false
isLucky(1230)
true
