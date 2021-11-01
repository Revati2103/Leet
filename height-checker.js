var heightChecker = function(heights) {
    const expected = heights.sort();
    let unsorted = 0;
    const indices = [];

    for(let i = 0; i< heights.length ; i++){
        for(let j =0; j< expected.length; j++){
        if(heights[i] != expected[j]){
            unsorted++;
            indices.push(i);
        }
    }
    }
    console.log(unsorted);
return unsorted;
};

heights = [1,1,4,2,1,3];
heightChecker(heights);