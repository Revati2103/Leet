function countUniqueValues(arr){
    let result = {};
        if(!arr.length) return 0;
        for(let element of arr){
            result[element] = (result[element] || 0) + 1 ;
            console.log(result);
        
        }
        return Object.keys(result).length
        
    }
countUniqueValues([1,1,1,1,1,1,2]);