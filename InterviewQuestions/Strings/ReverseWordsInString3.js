//https://leetcode.com/problems/reverse-words-in-a-string-iii/

// did myself, find a more efficient solution
var reverseWords = function (s) {
  let words = s.split(" "); //split into words
  let answer = []; //push the words back into an array because strings are not mutuable
  for (let i = 0; i < words.length; i++) {
    //loop through each word
    let leftIndex = 0; //pointer to switch letters
    let rightIndex = words[i].length - 1;
    let letters = words[i].split(""); //split the words into single letters
    while (leftIndex <= rightIndex) {
      //switch the letters
      let temp = letters[rightIndex];
      letters[rightIndex] = letters[leftIndex];
      letters[leftIndex] = temp;
      rightIndex--;
      leftIndex++;
    }
    answer.push(letters.join("")); //push the switch letters and join them
  }
  return answer.join(" "); //join the words seperated with a space
};
