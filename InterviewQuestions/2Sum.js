const twoSum = function (nums, target) {
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    let remainder = target - nums[i];
    if (remainder in hashMap) {
      return [hashMap[remainder], i];
    }
    hashMap[nums[i]] = i;
  }
};
