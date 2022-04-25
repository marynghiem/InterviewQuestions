//https://leetcode.com/problems/remove-linked-list-elements/

var removeElements = function (head, val) {
  let prev = null;
  let current = head;
  let next;
  while (current) {
    if (current.val === val) {
      if (prev === null) {
        head = current.next;
        current = head;
      } else {
        next = current.next;
        prev.next = next;
        current = next;
      }
    } else {
      prev = current;
      current = current.next;
    }
  }
  return head;
};
