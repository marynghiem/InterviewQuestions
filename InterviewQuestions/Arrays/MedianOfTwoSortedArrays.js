//https://leetcode.com/problems/median-of-two-sorted-arrays/description/

var findMedianSortedArrays = function (nums1, nums2) {
  for (let i = 0; i < nums2.length; i++) {
    nums1.push(nums2[i]);
  }
  nums1.sort((a, b) => a - b);
  console.log(nums1);
  let left = 0;
  let right = nums1.length - 1;
  if (nums1.length % 2 == 0) {
    while (left < right) {
      left++;
      right--;
    }
    console.log(left, right);
    let median = (nums1[left] + nums1[right]) / 2;
    return median;
  }
  if (nums1.length % 2 == 1) {
    let middle = (nums1.length - 1) / 2;
    return nums1[middle];
  }
};
