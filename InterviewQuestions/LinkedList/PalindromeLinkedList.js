//https://leetcode.com/problems/palindrome-linked-list/submissions/

//first solution
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

//second solution
//get to the middle, reverse the second half and then compare
var isPalindrome = function (head) {
  if (!head || !head.next) {
    return true;
  }
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  slow.next = reverseList(slow.next);
  slow = slow.next;
  while (slow) {
    if (slow.val !== head.val) {
      return false;
    }
    slow = slow.next;
    head = head.next;
  }
  return true;
};

var reverseList = function (head) {
  let current = head;
  let previous = null;
  let next;
  while (current !== null) {
    next = current.next; // save the next number && increment next up.
    current.next = previous; //change the next pointer to be reversed
    previous = current; // increment the previous up
    current = next; //increment the current up
  }
  return previous; //returning all previous values
};
