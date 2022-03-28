//https://leetcode.com/problems/valid-parentheses/

//solved using a stack
//looked at a reference, need to solve mby myself later
var isValid = function (s) {
  // create a stack
  let stck = [];
  //loop through each element in a string
  for (let i = 0; i < s.length; i++) {
    let char = stck[stck.length - 1];
    //if there is a starting bracket, push it into the stack
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      stck.push(s[i]);
      //pop the opening bracket off the stack,
      //if there is closing bracket in string
    } else if ((char == "(" && s[i] == ")") || (char == "{" && s[i] == "}") || (char == "[" && s[i] == "]")) {
      stck.pop();
    } else return false;
  }
  return stck.length ? false : true;
};
