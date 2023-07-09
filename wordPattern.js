

var wordPattern = function(pattern, s) {
      const words = s.split(' ');
    if (words.length !== pattern.length) return false;

    for (let i = 0; i < pattern.length; i++) {
        const currentPatternChar = pattern[i];
        const currentWord = words[i];

        if (
            pattern.indexOf(currentPatternChar) !== words.indexOf(currentWord) ||
            pattern.lastIndexOf(currentPatternChar) !== words.lastIndexOf(currentWord)
        ) {
            return false;
        }
    }

    return true;
};
