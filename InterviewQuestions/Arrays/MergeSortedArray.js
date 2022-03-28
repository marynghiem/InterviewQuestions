//https://leetcode.com/problems/merge-sorted-array/

//1st try (inefficent)
//runtime: 104 ms
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

//second try
//coded using pointers
//faster runntime 67ms

var merge = function (nums1, m, nums2, n) {
  let first = m - 1;
  let second = n - 1;
  let i = m + n - 1;

  while (second >= 0) {
    let firstVal = nums1[first];
    let secondVal = nums2[second];
    if (firstVal < secondVal) {
      nums1[i] = secondVal;
      i--;
      second--;
    } else {
      nums1[i] = firstVal;
      nums1[i] = firstVal;
      i--;
      first--;
    }
  }
};
