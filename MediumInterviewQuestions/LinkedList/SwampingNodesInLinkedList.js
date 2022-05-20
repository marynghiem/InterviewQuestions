//https://leetcode.com/problems/swapping-nodes-in-a-linked-list/

//correct solution
var swapNodes = function (head, k) {
  let node = head,
    first = head,
    second = head;
  for (let i = 1; i < k; i++) {
    node = node.next;
    second = second.next;
  }

  while (second.next !== null) {
    second = second.next;
    first = first.next;
  }

  let temp = first.val;
  first.val = node.val;
  node.val = temp;
  return head;
};

//my attempt
var swapNodes = function (head, k) {
  let node = head,
    first = head,
    second = head;

  for (let i = 1; i < k; i++) {
    node = node.next;
    second = second.next;
  }

  while (second.next !== null) {
    first = first.next;
    second = second.next;
  }

  let temp = first.val;
  first.val = node.val;
  node.val = temp;

  return head;
};

/*1. Find our kth node (from the beginning)
Starting with a for loop where i = 1 since the list is 1-indexed, we will set node to the next until we find our kth node.
We will do the same with second.

2. Find our kth node from the end
Once we have our kth node, we just need to find the kth node from the end.
To do this, you can use a 2 pointer method with first and second. We know that the node we need is k nodes away from the last node in the list. Since the second pointer is at the kth node, and the first pointer is at head, they are already k nodes away.
We can continue to traverse first and second pointers until the second pointer reaches null, (the end of the list). At this point, first will be pointing at the kth node from the end.

3. Swap them
Temporarily store the value of first
Reassign first.val to be node.val
Finally, assign node.val to be temp
We can then return the head.*/
