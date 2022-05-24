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
  let result = [-1, -1]; //return this if theres no target number
  let first = 0; //pointer that starts from left
  let end = nums.length - 1; //pointer that starts from the end

  //first binary search
  while (first < end) {
    //finding the middle
    let middle = Math.floor((first + end) / 2);
    //if target is bigger than middle number
    if (target > nums[middle]) {
      //reassign first to the middle + 1;
      first = middle + 1;
    } else {
      //if target is equal or smaller
      //set the end equal to the middle
      end = middle;
    }
  }
  //after the first binary search, check to see if the first is equal to target, it is not in the array and return the result
  if (nums[first] !== target) {
    return result;
  } else {
    result[0] = first;
  }
  end = nums.length - 1;

  //second binary search
  while (first < end) {
    // Make mid biased to the right
    let middle = Math.floor((first + end) / 2 + 1);
    //if middle number is bigger than target
    if (nums[middle] > target) {
      end = middle - 1;
    } else {
      first = middle;
    }
  }
  result[1] = end;
  return result;
};
