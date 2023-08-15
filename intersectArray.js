// Intersection of Two Arrays II
// Easy
// 50.0% Acceptance
// In this lab, you will be implementing a function to find the intersection of two integer arrays, nums1 and nums2. The intersection of these arrays should contain elements that are present in both arrays. Each element in the result must appear as many times as it shows in both arrays, and you may return the result in any order.

// For example, let's consider the following two integer arrays:

// nums1 = [1, 2, 2, 1]
// nums2 = [2, 2]
// The intersection of these arrays will be [2, 2] because the number 2 is present twice in both arrays.

// Here is another example:

// nums1 = [4, 9, 5]
// nums2 = [9, 4, 9, 8, 4]
// The intersection of these arrays could either be [9, 4] or [4, 9]. Both are accepted since the order does not matter, but the numbers 9 and 4 appear in both arrays.


function intersect(nums1, nums2) {
  let result = [];
  let intersection = {}

  for(const num of nums1){
    if(!intersection[num]){
      intersection[num] = 0;
    }
    intersection[num]++;
  }

  for(const num of nums2){
    if(intersection[num] > 0) {
      intersection[num]--;
      result.push(num);
    }
  }
  return result;
}
