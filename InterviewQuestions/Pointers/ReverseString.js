//https://leetcode.com/problems/reverse-string/submissions/

var reverseString = function (s) {
  let leftIndex = 0;
  let rightIndex = s.length - 1;
  while (leftIndex < rightIndex) {
    let temp = s[rightIndex];
    s[rightIndex] = s[leftIndex];
    s[leftIndex] = temp;
    leftIndex++;
    rightIndex--;
  }
  return s;
};

//attempted second time
//can do without help but glanced at the answer once
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  let temp;
  while (left < right) {
    temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
  return s;
};

const reverseString = (s) => {
  //create index left and right
  let left = 0;
  let right = s.length - 1;
  //keeping track of numbers
  let temp;
  //while loop
  while (left < right) {
    //use temp to remember left value
    temp = s[left];
    //swap
    s[left] = s[right];
    //swap
    s[right] = temp;
    //increment and decrement left and right values
    left++;
    right--;
  }
  return s;
};
