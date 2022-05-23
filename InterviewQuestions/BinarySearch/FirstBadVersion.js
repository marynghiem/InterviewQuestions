//https://leetcode.com/problems/first-bad-version/

var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let leftIndex = 1;
    let rightIndex = n;
    while (leftIndex < rightIndex) {
      let middle = Math.floor(leftIndex + (rightIndex - leftIndex) / 2);
      if (isBadVersion(middle)) {
        rightIndex = middle;
      } else {
        leftIndex = middle + 1;
      }
    }
    return leftIndex;
  };
};
