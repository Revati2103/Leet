var minimumSum = function(n, k) {

    let result = [];
    let i = 1;

    while(result.length < n){
        let insert = true;

        for(const element of result){
            if(element + i === k){
                insert = false;
                break;
            }
        }
        if(insert){
            result.push(i)
        }
        i++;
    }

return result.reduce((sum, curr) =>sum + curr)

};
