/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const alphabets = "abcdefghijklmnopqrstuvwxyz".split("")
    let charMap = new Map();

    alphabets.forEach((alphabet) => {
        charMap.set(alphabet, false)
    })

    for(const char of sentence){
        charMap.set(char , true)
    }

    return !Array.from(charMap.values()).includes(false);

};
