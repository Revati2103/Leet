function findThirdSmallest(arr) {
  let smallest = Infinity;
  let secondSmallest = Infinity;
  let thirdSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      thirdSmallest = secondSmallest;
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest) {
      thirdSmallest = secondSmallest;
      secondSmallest = arr[i];
    } else if (arr[i] < thirdSmallest) {
      thirdSmallest = arr[i];
    }
  }

  return thirdSmallest;
}

// Example usage:
const array = [10, 4, 7, 1, 8, 3];
const thirdSmallestElement = findThirdSmallest(array);
console.log(thirdSmallestElement); // Output: 4
