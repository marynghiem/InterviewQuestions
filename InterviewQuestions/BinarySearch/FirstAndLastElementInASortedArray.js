//https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

//first attempt but might not be log(n)
var searchRange = function (nums, target) {
  let result = [-1, -1];
  let first = 0;
  let end = nums.length - 1;
  while (first <= end) {
    let middle = Math.floor((first + end) / 2);
    if (target < nums[middle]) {
      end = middle - 1;
    } else if (target > nums[middle]) {
      first = middle + 1;
    } else {
      let left = middle;
      let right = middle;
      while (nums[left] === target && first >= 0) {
        left--;
      }
      result[0] = left + 1;
      while (nums[right] === target && right <= nums.length - 1) {
        right++;
      }
      result[1] = right - 1;

      return result;
    }
  }
  return result;
};

//correct solution with log(n)
var searchRange = function (nums, target) {
  let result = [-1, -1];
  let first = 0;
  let end = nums.length - 1;
  while (first < end) {
    let middle = Math.floor((first + end) / 2);
    if (target > nums[middle]) {
      first = middle + 1;
    } else {
      end = middle;
    }
  }
  if (nums[first] !== target) {
    return result;
  } else {
    result[0] = first;
  }
  end = nums.length - 1;
  while (first < end) {
    let middle = Math.floor((first + end) / 2 + 1);
    if (nums[middle] > target) {
      end = middle - 1;
    } else {
      first = middle;
    }
  }
  result[1] = end;
  return result;
};
