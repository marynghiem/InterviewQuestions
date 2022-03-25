//https://leetcode.com/problems/merge-sorted-array/

//1st try (inefficent)

//time and space complexity:
//time: (n)log(n) for nums.sort
//time: (n+m)log(n+m)
//space: n + m because it is just whatever nums1 is
var merge = function (nums1, m, nums2, n) {
  let indexNums2 = 0;
  for (let i = m; i < nums1.length; i++) {
    nums1[i] = nums2[indexNums2];
    indexNums2++;
  }
  nums1.sort((a, b) => a - b);
};
