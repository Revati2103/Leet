// For a given input string, capitalize just the first character of each word.
// eg capitalize("hi how are you") => Hi How Are You

function capitalize(str){
const words = [];

  for (const word of str.split(" ")) {
      words.push(word[0].toUpperCase() + word.slice(1));
  }
  
   return words.join(" ");
}

capitalize("hi how are you");