var mergeAlternately = function(word1, word2) {

    let mergedStr = ""
    const maxLength = Math.max(word1.length, word2.length);

    for(let i = 0; i<maxLength ; i++){
        if(i<word1.length) mergedStr += word1[i];
        if(i<word2.length) mergedStr += word2[i];
    }
    return mergedStr;
};
