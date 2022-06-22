//https://leetcode.com/problems/partition-labels/

var partitionLabels = function (s) {
  const last = new Array(26).fill(-1);
  const partitions = [];
  let anchor = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    last[s.charCodeAt(i) - "a".charCodeAt(0)] = i;
  }

  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, last[s.charCodeAt(i) - "a".charCodeAt(0)]);
    if (i === end) {
      partitions.push(i - anchor + 1);
      anchor = i + 1;
    }
  }
  return partitions;
};
