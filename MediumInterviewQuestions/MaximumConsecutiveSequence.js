//https://leetcode.com/problems/longest-consecutive-sequence/

var longestConsecutive = function (nums) {
  let set = new Set(); //creates a new set
  for (let num of nums) {
    //adds only unique numbers
    set.add(num);
  }
  let longestStreak = 0;
  for (let num of set) {
    if (!set.has(num - 1)) {
      //if there isnt a num-1, start at that number
      let currentNum = num;
      let currentStreak = 1; //have a current streak and longest streak
      while (set.has(currentNum + 1)) {
        currentStreak++; //increment currentStreak by one if the set has the next number
        currentNum++; //increment the currentNumber
      }
      longestStreak = Math.max(longestStreak, currentStreak); //compare longestStreak vs. currentStreak
    }
  }
  return longestStreak;
};
