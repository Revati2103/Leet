var decryptAlphabets = function(s) {
    let alphabetArray = [null, 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let decryptionMap = new Map();
    let results = [];

    for(let i = 1; i<alphabetArray.length; i++){
        if(i>=10){
            decryptionMap.set(i + '#',alphabetArray[i]);
        } else {
            decryptionMap.set(i, alphabetArray[i]);
        }
    }

    for(let i = 0; i< s.length; i++){
        if(s[i+2] === '#'){
            results.push(decryptionMap.get(s[i]+ s[i+1]+ s[i+2]));
            i +=2;
        }
        else {
            results.push(decryptionMap.get(Number (s[i])));
        }
    }
    console.log(results);
    return results;

};

let s = "10#11#12";
decryptAlphabets(s);