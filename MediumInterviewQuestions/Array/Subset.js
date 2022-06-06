//https://leetcode.com/problems/subsets/

var subsets = function (nums) {
  let result = []; //created an empty array
  dfs([], 0); //calling the function created below

  function dfs(current, index) {
    result.push(current);
    for (let i = index; i < nums.length; i++) {
      dfs(current.concat(nums[i]), i + 1);
    }
    console.log(result);
  }

  return result;
};
