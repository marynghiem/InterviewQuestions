//https://leetcode.com/problems/search-in-rotated-sorted-array/

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }
    // When dividing the roated array into two halves, one must be sorted.
    // Check if the left side is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        // target is in the left
        right = mid - 1;
      } else {
        // target is in the right
        left = mid + 1;
      }
    }
    // Otherwise, the right side is sorted
    else {
      if (nums[mid] <= target && target <= nums[right]) {
        // target is in the right
        left = mid + 1;
      } else {
        // target is in the left
        right = mid - 1;
      }
    }
  }
  return -1;
};

//attempted it again
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let middle; //initialized it inside the
  while (left <= right) {
    middle = Math.floor((left + right) / 2); //put nums.length instead of left + right && forgot to put (left +right) in parentheses
    if (nums[middle] === target) {
      return middle;
    }
    if (nums[left] <= nums[middle]) {
      if (nums[left] <= target && target <= nums[middle]) {
        right = middle - 1;
      } else {
        left = middle + 1; //forgot the else statements
      }
    } else {
      if (nums[middle] <= target && target <= nums[right]) {
        //didnt add the && statement, accidentally wrote it as nums[middle] <=target<= nums[right]
        left = middle + 1; //accidentally put left = left + 1;
      } else {
        right = middle - 1; //forgot the else statements
      }
    }
  }
  return -1;
};
