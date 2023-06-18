
write a function that merges all its string arguments and returns the result. To illustrate what this function must do, we've included examples of conditions that must evaluate to true. We encourage you to include code in your submission that asserts these conditions.

merge('abc') === 'abc';
merge('abc', '123') === 'a1b2c3';
merge('abc', '123456') === 'a1b2c3456';


function merge(...args) {
  // Find the maximum length among the input strings
  const maxLength = Math.max(...args.map(str => str.length));
  let merged = '';

  // Iterate up to the maxLength
  for (let i = 0; i < maxLength; i++) {
    // Iterate over each argument and append the character at the current index
    args.forEach(str => {
      // If the character at the current index exists, append it to the merged string
      // If it doesn't exist, append an empty string to maintain the correct length
      merged += str[i] || '';
    });
  }

  return merged;
}
