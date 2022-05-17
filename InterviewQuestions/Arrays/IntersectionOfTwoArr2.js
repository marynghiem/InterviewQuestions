//https://leetcode.com/problems/intersection-of-two-arrays-ii/

//// 1. Create a hash map of nums1 to count how many times you see each number
// 2. Loop through the second array and add the number to your result if the hash map contains the number
//josephs solution
const intersection = () => {
  const result = [];
  const hashMapOfNums1 = {};
  // Step 1
  for (const num of nums1) {
    hashMapOfNums1[num] = (hashMapOfNums1[num] ?? 0) + 1;
  }
  // Step 2
  for (const num of nums2) {
    if (num in hashMapOfNums1 && hashMapOfNums1[num] > 0) {
      result.push(num);
      hashMapOfNums1[num]--;
    }
  }
  return result;
};

//mary's solution
var intersect = function (nums1, nums2) {
  let answer = [];
  let hash = {};
  for (let i = 0; i < nums1.length; i++) {
    hash[nums1[i]] = (hash[nums1[i]] ?? 0) + 1;
  }
  for (let i = 0; i < nums2.length; i++) {
    if (nums2[i] in hash && hash[nums2[i]] > 0) {
      answer.push(nums2[i]);
      hash[nums2[i]]--;
    }
  }

  return answer;
};
