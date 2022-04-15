//https://leetcode.com/problems/middle-of-the-linked-list/submissions/

//if even number, this will give you second middle
//[1,2,3,4,5,6] will give you [4,5,6]
var middleNode = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

// if even number, this will give you the first middle
//[1,2,3,4,5,6] will give you [3,4,5,6]
var middleNode = function (head) {
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
