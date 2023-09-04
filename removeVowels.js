var removeVowels = function(s) {
    const vowels = 'aeiouAEIOU'.split('');
    return s.split('').filter((char) => !vowels.includes(char)).join('')
};
