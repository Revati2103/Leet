/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isMonotonic = function (nums) {
  const increasing = nums.every((num, index) => index === 0 || num >= nums[index - 1]);
  const decreasing = nums.every((num, index) => index === 0 || num <= nums[index - 1]);
  return increasing || decreasing;
};

export { isMonotonic };
