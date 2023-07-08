function longestCommonPrefix(strs){
    
let lcp = "";
    
    if(!strs || !strs.length) return lcp;
    strs.sort();
    for(let i = 0; i<strs[0].length; i++){
        if(strs[0][i] !== strs[strs.length-1][i]){
            return lcp;
        }else{
            lcp += strs[0][i];
        }
    }
    return lcp;
}
undefined
longestCommonPrefix(["flower","flow","flight"])
'fl'
