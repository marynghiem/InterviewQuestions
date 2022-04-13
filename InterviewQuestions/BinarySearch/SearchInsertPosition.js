// Search Insert Position

//need to try again later
var searchInsert = function (nums, target) {
  let newArr = [...nums];
  let left = 0;
  let right = newArr.length;
  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    if (newArr[middle] < target) {
      left = middle + 1; // this is because floor rounds down, so you want to add one to account for it
    } else {
      right = middle;
    }
  }
  return left;
};
