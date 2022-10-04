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

var reverseList = function (head) {
  let prev = null; //created prev, current and a next
  let current = head;
  let next;
  while (current !== null) {
    //while loop until current is null
    next = current.next; //remember the next one after current
    current.next = prev; // changing the pointer so that it goes to the previous
    prev = current; //previous moves foward
    current = next; //current moves foward
  }
  return prev;
};
