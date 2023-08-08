Given an array of nos, sort them as per the no of 1's in their binary representation 

/**
 * @param {number[]} arr
 * @return {number[]}
 */
const sortByBits = function (arr) {
  const countOnes = num => {
    let count = 0;
    while (num !== 0) {
      count += num & 1;
      num >>= 1;
    }
    return count;
  };

  arr.sort((a, b) => {
    const countA = countOnes(a);
    const countB = countOnes(b);

    if (countA === countB) {
      return a - b;
    }

    return countA - countB;
  });

  return arr;
};

export default sortByBits;
