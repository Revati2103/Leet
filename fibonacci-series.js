//Print the nth entry in the fibonacci series .
//Fibonacci series is an ordering of numbers where each number is the sum of preceding two.

//Iterative solution

// function fib(n){

//     const fibonacci = [0,1];
    
//     for(let i =2; i<=n; i++){
//         const a = fibonacci[i-1];
//         const b = fibonacci[i-2];
//         fibonacci.push(a+b);

//     }
//     console.log(fibonacci[n]);
//     return fibonacci[n];
// }

//Solution using recursion 

function fib(n){
    if(n<2){
        return n;
    }
    console.log((n-1) + (n-2));
    return (n-1) + (n-2);
}
fib(6);

