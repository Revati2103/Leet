// Write a function that takes an array of objects and returns an array of the objects 'name' property only if that property exists in javascript

function getNames(objects) {
  return objects
    .filter(obj => obj.hasOwnProperty('name'))
    .map(obj => obj.name);
}


// const objects = [
//   { name: 'John', age: 30 },
//   { age: 25 },
//   { name: 'Alice', job: 'Engineer' },
//   { name: 'Bob', city: 'New York' }
// ];

// const names = getNames(objects);
// console.log(names); // Output: ['John', 'Alice', 'Bob']
