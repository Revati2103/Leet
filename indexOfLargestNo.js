function findIndexOfLargestNumber(numbers) {
  let maxIndex = 0;
  let maxValue = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxValue) {
      maxValue = numbers[i];
      maxIndex = i;
    }
  }

  return maxIndex;
}
