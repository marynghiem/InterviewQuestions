//https://leetcode.com/problems/4sum/submissions/899358318/

var fourSum = function (nums, target) {
  let answer = [];
  let sortedNums = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortedNums.length - 3; i++) {
    //if the next number is the same as previous, skip
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < sortedNums.length - 2; j++) {
      //come back and ask joseph
      if (j > i + 1 && sortedNums[j] === sortedNums[j - 1]) {
        continue;
      }
      let left = j + 1;
      //made a mistake here and caused the whole problem to be incorrect
      let right = sortedNums.length - 1;
      while (left < right) {
        const sum = sortedNums[i] + sortedNums[j] + sortedNums[left] + sortedNums[right];
        if (sum < target) {
          left++;
        } else if (sum > target) {
          right--;
        } else {
          answer.push([sortedNums[i], sortedNums[j], sortedNums[left], sortedNums[right]]);
          //forgot about incrementing if they are the same.
          while (left < right && sortedNums[left] === sortedNums[left + 1]) {
            left++;
          }
          while (left < right && sortedNums[right] === sortedNums[right - 1]) {
            right--;
          }
          left++;
          right--;
        }
      }
    }
  }
  return answer;
};
