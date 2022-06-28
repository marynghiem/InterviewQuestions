//https://leetcode.com/problems/swap-nodes-in-pairs/

var swapPairs = function (head) {
  let dummy = new ListNode();
  dummy.next = head;

  let prev = dummy;

  while (head && head.next) {
    let n1 = head;
    let n2 = head.next;

    prev.next = n2;
    n1.next = n2.next;
    n2.next = n1;

    prev = n1;
    head = n1.next;
  }
  return dummy.next;
};
