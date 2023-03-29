//https://leetcode.com/problems/sort-colors/description/

//solved using national dutch flag
var sortColors = function (nums) {
  //starting by initializing low, mid and high
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;
  //while loop until mid is higher than high
  while (mid <= high) {
    //if the first number was 0, flip middle and low
    if (nums[mid] == 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      //increment low and mid
      low++;
      mid++;
    } //if the number was 1, then increment middle
    else if (nums[mid] == 1) {
      mid++;
    } //if the number was 2, then decrement high
    else {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
};
