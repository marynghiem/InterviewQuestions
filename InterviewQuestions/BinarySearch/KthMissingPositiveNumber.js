//https://leetcode.com/problems/kth-missing-positive-number/

var findKthPositive = function (arr, k) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] - mid - 1 < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left + k;
};
