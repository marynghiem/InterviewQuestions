//https://leetcode.com/problems/jump-game-ii/

//first loop:
//i = 0
//current = 0 + 2 ---> 2
//global =  Math.max(0,2) ---> 2
//local = 0 == 0 ---> 2
//step = 1;

//second loop:
//i = 1
//localMax is not bigger than 4; !2 > 4
//current = 1 + 3 ---> 4
//global = Math.max(2,4) ---> 4;
//local = 2 was not equal to 1
//local = 2;

//third loop:
//i = 2
//localMax: 2 is not biggether than 4
//current = 2 + 1 ---> 3
//global = Math.max(4,3) --> 4
//localMax and i are equal = 2 ==2
//local = 4;
//step = 2;

//fourth loop
//i = 3
//localMax = 4
//steps =2
// if (4 > 4 ) is not running because they are equal
//current = 3 + 1 ---> 4
//global = Math.floor(4,4) -->4
//local is not equal to the i

//completed the loop, and then return 2

//nums = [2,3,1,1,4]
var jump = function (nums) {
  let globalMax = 0;
  let localMax = 0;
  let step = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (localMax > nums.length - 1) {
      //if localMax is bigger than the length of nums, we keep breaking until the end of the loop
      break;
    }

    const current = i + nums[i];
    globalMax = Math.max(globalMax, current);
    if (localMax == i) {
      localMax = globalMax;
      step++;
    }
  }
  return step;
};

//another solution
var jump = function (nums) {
  let newMax = 0;
  let jump = 0;
  let oldMax = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    newMax = Math.max(newMax, i + nums[i]);
    if (i == oldMax) {
      jump++;
      oldMax = newMax;
    }
  }
  return jump;
};
