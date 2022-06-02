//https://leetcode.com/problems/check-if-n-and-its-double-exist/

var checkIfExist = function (arr) {
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    const currValue = arr[i];
    console.log(set);
    if (set.has(currValue)) {
      return true;
    }
    set.add(currValue / 2);
    set.add(currValue * 2);
  }
  return false;
};
