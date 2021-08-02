// A set is a data structure that allows to store ONLY unique elements within itself.

const myArray = [1,2,3,4,5];
const mySet = new Set(myArray);
console.log(myArray);
console.log(mySet);

//Add elements to set

mySet.add(6);
console.log(mySet);

//Delete element from a set 

mySet.delete(6);
console.log(mySet);

// Clear a set

mySet.clear();
console.log(mySet);

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);

console.log(mySet);

//Check if element exists

console.log(mySet.has(4));

console.log(mySet.size);

