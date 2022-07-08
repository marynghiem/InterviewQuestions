//https://leetcode.com/problems/permutations/

var permute = function (nums) {
  let temp = []; //store the temporary values
  let result = []; //return this at the end

  function backtracking(temp, nums) {
    //backtracking function
    if (nums.length == 0) {
      //when there are no numbers left
      //push one of the answers into the result array
      result.push([...temp]);
      return;
    }
    //main backtracking function
    for (let i = 0; i < nums.length; i++) {
      //loop through nums
      temp.push(nums[i]); //first number pushed
      nums.splice(i, 1); //take out the number
      backtracking(temp, nums); //calling itself again
      nums.splice(i, 0, temp.pop()); // not taking anything out, just adding the last element of temp in nums
    }
  }
  backtracking(temp, nums); //calling itself
  return result; //return solution
};
