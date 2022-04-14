//https://leetcode.com/problems/multiply-strings/

var multiply = function (num1, num2) {
  const result = Array(num1.length + num2.length).fill(0);
  //creates an array with the largest amount of space that the //two numbers can multiply up to
  for (let j = num2.length - 1; j > -1; j--) {
    for (let i = num1.length - 1; i > -1; i--) {
      //loop through each string backwards
      const product = num1[i] * num2[j]; //dont have to convert because indexing it will give it a number value
      const index = num1.length + num2.length - 1 - (num2.length - 1 - j + num1.length - 1 - i);
      //figures the index
      result[index] += product;
      if (result[index] > 9) {
        //if the array value is larger than 9, carry over
        result[index - 1] += Math.floor(result[index] / 10); //keep tens place. example 16, will return 1 (this is the carry over)
        result[index] %= 10; //will return ones place, example 16 will return 6
      }
    }
  }
  while (result[0] === 0) {
    result.shift(); //removes 0 in front of the array [0, 0 ,0 ,1] will be [1]
  }
  return result.length === 0 ? "0" : result.join("");
};
