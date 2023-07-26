const names = ['Alice', 'Bob', 'John'];
const heights = [160, 175, 180];

const combinedArray = names.map((name, index) => ({ name, height: heights[index] }));

combinedArray.sort((a, b) => b.height - a.height); // Sort in descending order of heights

const sortedNames = combinedArray.map((item) => item.name); // Extract the sorted names

console.log(sortedNames);
