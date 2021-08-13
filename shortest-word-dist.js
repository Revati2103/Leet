var shortestDistance = function(wordsDict, word1, word2) {
    
    let w1 = -1;
    let w2 = -1;
    let minDistance = wordsDict.length;
    
    for(let i = 0; i< wordsDict.length; i++){

        if(wordsDict[i] === word1){
            w1 = i;
        }else if(wordsDict[i] === word2){
            w2 = i;
        }

        if(w1 != -1 && w2 != -1){
            minDistance = Math.min(minDistance, Math.abs(w1-w2));
        }

    }
    console.log(minDistance);
    return minDistance;
    
};

wordsDict = ["practice", "makes", "perfect", "coding", "makes"];
word1 = "makes";
word2 = "coding";

shortestDistance(wordsDict, word1, word2);


