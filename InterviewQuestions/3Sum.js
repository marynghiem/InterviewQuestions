//https://leetcode.com/problems/3sum/submissions/

//brute force
var threeSum = function (nums) {
  const answer = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      for (let k = j + 1; k < nums.length; k++) {
        if (k > j + 1 && nums[k] === nums[k - 1]) {
          continue;
        }
        if (nums[i] + nums[j] + nums[k] === 0) {
          answer.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return answer;
};

//efficient method
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    const target = 0 - nums[i];
    let left = i + 1;
    let right = nums.length - 1;
    while (right > left) {
      const sum = nums[left] + nums[right];
      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else {
        answer.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      }
    }
  }
  return answer;
};
