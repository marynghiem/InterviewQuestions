//https://leetcode.com/problems/3sum/submissions/

//brute force
//time complexity: n^3
//space complexity: nC3
var threeSum = function (nums) {
  const answer = [];
  nums.sort((a, b) => a - b); //time: nlog(n) n is how long numbers is
  for (let i = 0; i < nums.length; i++) {
    //time: n^3
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
//time complexity: n^2
//space complexity: nC3
var threeSum = function (nums) {
  nums.sort((a, b) => a - b); // n*log(n)
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    // O(n)
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    const target = 0 - nums[i];
    let left = i + 1;
    let right = nums.length - 1;
    while (right > left) {
      // O(n)
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

//second attempt of 3Sum:
//forgot to sort the problem
//when creating the if then statement to continue if a repeating number is seen, i used the wrong condition
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let target = 0 - nums[i];
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[left] + nums[right];
      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else {
        answer.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) {
          left++;
        }
        while (nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      }
    }
  }
  return answer;
};

//attempted 3sum again
//notes: got 90% correct just missed the //
var threeSum = function (nums) {
  let result = [];
  //(a,b) => a - b
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    //missed the continue to break out of this loop
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let target = 0 - nums[i];
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[left] + nums[right];
      if (sum === target) {
        result.push([nums[i], nums[left], nums[right]]);

        //did not include the while loops when there is the same number on repeat
        while (nums[left] === nums[left + 1]) {
          left++;
        }
        while (nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      }
      if (sum > target) {
        right--;
      }
      if (sum < target) {
        left++;
      }
    }
  }
  return result;
};

//try again. tried it but couldnt finish the solution
var threeSum = function (nums) {
  let answer = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i != 0 && nums[i - 1] === nums[i]) {
      continue;
    }
    let target = 0 - nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[left] + nums[right];
      if (sum === target) {
        answer.push([nums[left], nums[right], nums[i]]);
        while (nums[left] === nums[left + 1]) {
          left++;
        }
        while (nums[right] === nums[right - 1]) {
          //made if statements
          right--;
        }
        left++;
        right--;
      }
      if (sum > target) {
        // forgot about the if statement
        right--;
      }
      if (sum < target) {
        left++;
      }
    }
  }
  return answer;
};
