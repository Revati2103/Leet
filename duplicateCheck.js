// If duplicate args return true else false

function areThereDuplicates(...args) {
    const set = new Set();
    
    if(!args.length) return false;
    
    for(let i = 0; i< args.length; i++){
        if(set.has(args[i])) return true;
        set.add(args[i]);
    }
    return false;
   }

//    areThereDuplicates(1,2,3) => false
//    areThereDuplicates(1,1,2) => true
