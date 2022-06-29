//https://leetcode.com/problems/container-with-most-water/

var maxArea = function (height) {
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  let maxArea = 0;
  while (leftPointer < rightPointer) {
    let length = Math.min(height[leftPointer], height[rightPointer]);
    let width = rightPointer - leftPointer;
    let area = length * width;
    maxArea = Math.max(area, maxArea);
    if (height[leftPointer] < height[rightPointer]) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }
  return maxArea;
};
