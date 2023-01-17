//https://leetcode.com/problems/two-sum/

//2nd attempt (hash map or object)

const twoSum = function (nums, target) {
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    let remainder = target - nums[i]; //got remainder
    if (remainder in hashMap) {
      return [hashMap[remainder], i];
    }
    hashMap[nums[i]] = i; //stored {nums: index,}
  }
};

//Solve again without looking at previous method
//solved again on June 29th
//attempt on August 29
var SecondSum = function (nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let remainder = target - nums[i];
    if (remainder in obj) {
      return [obj[remainder], i];
    }
    obj[nums[i]] = i;
  }
};

//Third attempt
var Sum = function (nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    let check = target - nums[i];
    if (check in hash) {
      //only mistake was that I wrote hash.has(check) which is used for set.
      return [hash[check], i];
    }
    hash[nums[i]] = i;
  }
};
