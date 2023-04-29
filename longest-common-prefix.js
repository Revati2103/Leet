// var longestCommonPrefix = function(strs) {
//     let commonStr = strs[0];
    
//     for (const words of strs) {

//         while(words.indexOf(commonStr) !=  0){
//             commonStr = commonStr.substring(0,commonStr.length-1);
//                 if(commonStr === "")
//                 break;
//         } 
//     }
//     console.log(commonStr);
//     return commonStr;
// };

// Return the longest common substring between given words . 
var longestCommonPrefix = function(strs){
    if(!strs.length) return '';
    let prefix = "";

    let maxPrefixLength = Math.min(...strs.map(str => str.length));

    for(let i = 0; i<maxPrefixLength; i++){
        let char = strs[0][i];

        if(strs.every(str => str[i] === char)){
            prefix += char;
        }else {
            break;
        }
    };
    console.log(prefix);
    return prefix;
}

let strs = ["flower","flow","flight"];
longestCommonPrefix(strs);

