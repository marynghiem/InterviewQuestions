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
