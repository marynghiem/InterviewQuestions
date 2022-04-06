//https://leetcode.com/problems/palindrome-linked-list/submissions/

var isPalindrome = function (head) {
  let answer = [];
  while (head) {
    answer.push(head.val);
    head = head.next;
  }
  console.log(answer);
  let leftPointer = 0;
  let rightPointer = answer.length - 1;
  while (leftPointer <= rightPointer) {
    if (answer[leftPointer] !== answer[rightPointer]) {
      return false;
    }
    leftPointer++;
    rightPointer--;
  }
  return true;
};
