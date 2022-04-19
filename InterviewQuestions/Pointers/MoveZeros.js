//https://leetcode.com/problems/move-zeroes/

//incorrect solution (moved the zero but didnt account for order)
var moveZeroes = function (nums) {
  let leftPointerIndex = 0;
  let rightPointerIndex = nums.length - 1;
  while (leftPointerIndex < rightPointerIndex) {
    if (nums[leftPointerIndex] === 0 && nums[rightPointerIndex] === 0) {
      rightPointerIndex--;
    } else if (nums[leftPointerIndex] === 0) {
      let previousLeftVal = nums[leftPointerIndex];
      nums[leftPointerIndex] = nums[rightPointerIndex];
      nums[rightPointerIndex] = previousLeftVal;
      rightPointerIndex--;
    } else if (nums[rightPointerIndex] === 0) {
      rightPointerIndex--;
    } else if (nums[leftPointerIndex] > nums[rightPointerIndex]) {
      let previousLeftVal = nums[leftPointerIndex];
      nums[leftPointerIndex] = nums[rightPointerIndex];
      nums[rightPointerIndex] = previousLeftVal;
    } else {
      leftPointerIndex++;
    }
  }
  return nums;
};

//correct solution
var moveZeroes = function (nums) {
  if (nums.length == 0 || nums.length == 1) {
    return nums;
  }
  let leftPointer = 0;
  let rightPointer = 0;
  while (rightPointer < nums.length) {
    if (nums[rightPointer] == 0) {
      rightPointer++;
    } else {
      let temp = nums[leftPointer];
      nums[leftPointer] = nums[rightPointer];
      nums[rightPointer] = temp;
      rightPointer++;
      leftPointer++;
    }
  }
  return nums;
};
