//https://leetcode.com/problems/odd-even-linked-list/

var oddEvenList = function (head) {
  if (head === null) {
    return null;
  }
  let odd = head;
  let even = head.next;
  let evenHead = even;
  while (even !== null && even.next !== null) {
    odd.next = even.next;
    odd = odd.next; //increment current
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
};
