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
export const linkedListLength = function (head) {
  let linkedList = 0;
  while (head !== null) {
    head = head.next;
    linkedList = linkedList + 1;
  }
  console.log(linkedList);
};
