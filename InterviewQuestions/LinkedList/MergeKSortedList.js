//https://leetcode.com/problems/merge-k-sorted-lists/description/
var mergeKLists = function (lists) {
  let root = lists[0];
  for (let i = 1; i < lists.length; i++) {
    root = mergeTwoLists(root, lists[i]);
  }

  return root || null;
};

var mergeTwoLists = function (list1, list2) {
  let current = new ListNode();
  let dummy = current;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next; //forgot to incremenet current
  }
  if (list1) {
    current.next = list1;
  }
  if (list2) {
    current.next = list2;
  }
  return dummy.next;
};
