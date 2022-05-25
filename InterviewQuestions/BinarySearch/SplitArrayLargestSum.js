//https://leetcode.com/problems/split-array-largest-sum/

//similar to capacity to ship problem
//nums = [7,2,5,10,8], m = 2
//output: 18
var splitArray = function (nums, m) {
  const feasible = (threshold) => {
    let total = 0;
    let count = 1;
    for (const num of nums) {
      total += num;
      if (total > threshold) {
        total = num;
        count++;
        if (count > m) {
          return false;
        }
      }
    }
    return true;
  };

  let left = Math.max(...nums);
  let right = nums.reduce(function (a, b) {
    return a + b;
  }, 0);
  console.log(right);
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (feasible(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
