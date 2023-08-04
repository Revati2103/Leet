// truncateSentence("Hello how are you Contestant", 4);
// Output: "Hello how are you"

/**
 * Truncate Sentence
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
export const truncateSentence = function (s, k) {
    return s.split(' ').slice(0,k).join(' ');
}
