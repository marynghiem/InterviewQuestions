//https://leetcode.com/problems/sqrtx/

//if the input is 8, the output should be 2
var mySqrt = function (x) {
  let left = 0; //the smallest number
  let right = x + 1; //the biggest. in this case it is 9
  while (left < right) {
    //then have a condition to exit while loop
    let middle = Math.floor(left + (right - left) / 2); //to get the middle
    //middle would be 4
    if (middle * middle <= x) {
      // if condition to check if the middle squared is less than or equal to x
      //16 is not less or equal to 8
      left = middle + 1;
    } else {
      //making the right 4
      right = middle;
    } //do again until 2 is the middle and then left is 3. then later both left and right will be 3
  }
  return left - 1; //return 3-1 = 2
};
