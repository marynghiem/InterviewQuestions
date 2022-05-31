//https://leetcode.com/problems/kth-missing-positive-number/

var findKthPositive = function (arr, k) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] - mid - 1 < k) {
      //subtracting current number with index - 1 will give the first number that is missing and so forth
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left + k;
};
//[2,3,4,7,11], 5
//output should be 9
//mid = 2,4, 3
//so for the condition,
//4-2-1 = 1 < 5
//11-4 - 1 = 5
