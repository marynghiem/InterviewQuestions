//https://leetcode.com/problems/length-of-last-word/

var lengthOfLastWord = function (s) {
  let words = s.split(" "); //sets words as a array of words
  console.log(words);
  words = words.filter(function (str) {
    //gets rid of whitespace in front and back
    return /\S/.test(str);
  });
  return words[words.length - 1].length; //returns the length
};

//second attempt. couldnt write the regex but could understand
var lengthOfLastWord = function (s) {
  //split the words up
  let words = s.split(" ");
  console.log(words);
  //filtering out non words
  words = words.filter(function (str) {
    return /\S/.test(str);
  });
  console.log(words);
  //returning the last words characters
  return words[words.length - 1].length;
};
