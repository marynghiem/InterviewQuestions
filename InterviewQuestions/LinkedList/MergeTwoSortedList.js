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
    current.next = list1; //adding list 1 and 2 if the length list1 & 2 is longer
  }
  if (list2) {
    current.next = list2;
  }
  return dummy.next;
};

//solved through recursion
var mergeTwoLists = function (list1, list2) {
  if (list1 == null) {
    return list2;
  }
  if (list2 == null) {
    return list1;
  }
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

//third attempt. made a mistake at the end and instead of if statements, i added while loops
var mergeTwoLists = function (list1, list2) {
  let current = new ListNode();
  let dummy = current;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else if (list2.val < list1.val) {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  if (list1) {
    current.next = list1;
  }
  if (list2) {
    current.next = list2;
  }
  return dummy.next;
};

//solved the problem using recursion
var mergeTwoLists = function (list1, list2) {
  if (list1 === null) {
    return list2; //base case
  } else if (list2 === null) {
    return list1; //base case
  }

  if (list1.val > list2.val) {
    //if value of list1 is greater than list2
    [list1, list2] = [list2, list1]; // Swap in place
    //list2 will go next
  }
  //using recursion to set the next item in list1
  list1.next = mergeTwoLists(list1.next, list2);

  return list1;
};

//completed merge two sorted list without making listnode
var mergeTwoLists = function (list1, list2) {
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }
  let prev;
  let first;
  let result;
  let second;
  if (list1.val <= list2.val) {
    prev = list1;
    first = list1.next;
    second = list2;
  } else {
    prev = list2;
    first = list1;
    second = list2.next;
  }
  result = prev;
  while (first && second) {
    if (first.val <= second.val) {
      prev.next = first;
      first = first.next;
      prev = prev.next;
    } else {
      prev.next = second;
      second = second.next;
      prev = prev.next;
    }
  }
  if (first) {
    prev.next = first;
  }
  if (second) {
    prev.next = second;
  }
  return result;
};

//attempted
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
