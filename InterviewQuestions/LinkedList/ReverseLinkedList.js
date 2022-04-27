//https://leetcode.com/problems/reverse-linked-list/submissions/

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

//using recursion
function reverseList(head) {
  if (head == null || head.next == null) {
    return head;
  } else {
    let reversedHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return reversedHead;
  }
}
