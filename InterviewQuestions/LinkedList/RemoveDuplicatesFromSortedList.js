//https://leetcode.com/problems/remove-duplicates-from-sorted-list/

//solution on the internet, need to try again on my own later
var deleteDuplicates = function (head) {
  if (head == null || head.next == null) return head;
  let prev = head;
  let p = head.next;
  while (p != null) {
    if (p.val == prev.val) {
      prev.next = p.next;
      p = p.next;
      //no change prev
    } else {
      prev = p;
      p = p.next;
    }
  }
  return head;
};

//easier solution to understand
var deleteDuplicates = function (head) {
  let current = head;
  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};
