//https://leetcode.com/problems/remove-nth-node-from-end-of-list/

var removeNthFromEnd = function (head, n) {
  //egde case
  if (head === null) {
    return head;
  }
  //remove the node by going to the one behind it and reassigning its next to next.next;
  let dummy = new ListNode(0);
  dummy.next = reverseList(head);
  let cur = dummy;
  while (cur != null && n > 1) {
    console.log(cur); //0,5,4,3,2,1
    cur = cur.next;
    n--;
    console.log(n);
    console.log(cur); //5,4,3,2,1
    //current is 5
  }
  cur.next = cur.next.next;
  return reverseList(dummy.next);
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
