//https://leetcode.com/problems/top-k-frequent-elements/

var topKFrequent = function (nums, k) {
  const freqMap = new Map(); //similar to a hashmap
  //example:
  /*const map1 = new Map();
    map1.set('a', 1);
    map1.set('b', 2);
    map1.set('c', 3);
    console.log(map1.get('a'));
        // expected output: 1
    map1.set('a', 97);
    console.log(map1.get('a'));
        // expected output: 97 */

  const bucket = [];
  const result = [];

  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  } //if freqMap is empty, it will set as 0 and add 1; otherwise it will add one to the previous value

  for (let [num, freq] of freqMap) {
    bucket[freq] = (bucket[freq] || new Set()).add(num); //used the frequency to index into the array
  }
  console.log(bucket);
  //problem input:  [1,1,1,2,2,3], k = 2
  //[ <1 empty item>, Set(1) { 3 }, Set(1) { 2 }, Set(1) { 1 } ]
  //it says Set(1) because there is only one item in the set

  for (let i = bucket.length - 1; i >= 0; i--) {
    //loop through the back because the back has the highest frequency
    if (bucket[i]) result.push(...bucket[i]);
    if (result.length === k) break;
  }
  return result;
};
