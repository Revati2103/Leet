var lengthOfLongestSubstring = function(s) {

    const subset = new Set();
    let longestStr = 0;
    let i = 0;
    let j = 0;

    //Sliding pointers. Keep i fixed and move j. If something exists, delete and start over.

    while(i<s.length && j<s.length){

        if(!(subset.has(s[j]))){
            subset.add(s[j]);
            longestStr = Math.max(j-i +1, longestStr);
            j++;
        } else {
            subset.delete(s[i]);
            i++;
        }
    }
    console.log(longestStr);
    return longestStr;
};

let s = "nwwkew";
lengthOfLongestSubstring(s);