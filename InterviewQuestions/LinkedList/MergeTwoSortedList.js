//https://leetcode.com/problems/merge-two-sorted-lists/submissions/

//ask joseph why we need a dummy variable
var mergeTwoLists = function (list1, list2) {
  let current = new ListNode();
  const dummy = current;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1; //add list 1 into listnode
      list1 = list1.next; //increment list 1
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next; //increment current
  }
  if (list1) {
    current.next = list1;
  }
  if (list2) {
    current.next = list2;
  }
  return dummy.next;
};
