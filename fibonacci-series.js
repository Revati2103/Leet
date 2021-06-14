//Print the nth entry in the fibonacci series .
//Fibonacci series is an ordering of numbers where each number is the sum of preceding two.

function fib(n){

    const fibonacci = [0,1];
    
    for(let i =2; i<=n; i++){
        const a = fibonacci[i-1];
        const b = fibonacci[i-2];
        fibonacci.push(a+b);

    }
    console.log(fibonacci[n]);
    return fibonacci[n];
}

fib(10);