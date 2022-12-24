var generateParenthesis = function(n) {
    const ans = [];
    
    function generate(str,open,close){
        if (open>0) {
            generate(str+'(',open-1,close+1) 
        }
        if (close>0) {
            generate(str+')',open,close-1);
        }
        if (open==0 && close==0)
            ans.push(str);
    }
	// we need to add n-1 "(" and 1 ")" to strings to get valid parentheses
    generate("(",n-1,1);
    return ans;
};