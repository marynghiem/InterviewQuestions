//https://leetcode.com/problems/jump-game-ii/

var jump = function (nums) {
  let globalMax = 0;
  let localMax = 0;
  let step = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (localMax < i) {
      return -1;
    }
    if (localMax > nums.length - 1) {
      break;
    }
    const current = i + nums[i];
    globalMax = Math.max(globalMax, current);
    if (localMax == i) {
      localMax = globalMax;
      step++;
    }
  }
  return step;
};
