/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
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
