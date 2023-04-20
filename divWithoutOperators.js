// divide without using the division operator 

function divide(dividend, divisor) {
 
    // Calculate sign of divisor i.e.,
    // sign will be negative only if
    // either one of them is negative
    // otherwise it will be positive
    let sign = ((dividend < 0) ^ (divisor < 0)) ? -1 : 1;
     
    // Update both divisor and
    // dividend positive
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
     
    // Initialize the quotient
    let quotient = 0;
    while (dividend >= divisor) {
        dividend -= divisor;
        ++quotient;
    }
    //if the sign value computed earlier is -1 then negate the value of quotient
    if(sign==-1) quotient=-quotient;
    return quotient;
    }
    
