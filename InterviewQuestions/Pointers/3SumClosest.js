var threeSumClosest = function (nums, target) {
  let sortedNum = nums.sort((a, b) => a - b);
  let closest = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < sortedNum.length - 2; i++) {
    let left = i + 1;
    let right = sortedNum.length - 1;
    while (left < right) {
      const sum = sortedNum[i] + sortedNum[left] + sortedNum[right];
      if (Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum;
      }
      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return target;
      }
    }
  }
  return closest;
};
