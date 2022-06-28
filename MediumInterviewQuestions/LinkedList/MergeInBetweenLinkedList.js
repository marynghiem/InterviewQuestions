//https://leetcode.com/problems/merge-in-between-linked-lists/

var mergeInBetween = function (list1, a, b, list2) {
  let current = new ListNode();
  let dummy = current;
  let i = 0;
  while (list1) {
    if (i == a) {
      while (list2) {
        current.next = list2;
        current = current.next;
        list2 = list2.next;
      }
    }
    if (i < a || i > b) {
      current.next = list1;
      current = current.next;
      list1 = list1.next;
      i++;
    } else {
      i++;
      list1 = list1.next;
    }
  }
  return dummy.next;
};
