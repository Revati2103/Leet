function reverseInt(n){
    const reversed = n
                   .toString()
                   .split('')
                   .reverse()
                   .join('');

                   console.log(parseInt(reversed)* Math.sign(n));
                   return (parseInt(reversed) * Math.sign(n));
                 
}

reverseInt(200);