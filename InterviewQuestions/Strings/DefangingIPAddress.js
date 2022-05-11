//https://leetcode.com/problems/defanging-an-ip-address/

var defangIPaddr = function (address) {
  let newString = [];
  let split = address.split("");
  for (let i = 0; i < split.length; i++) {
    if (split[i] == ".") {
      newString.push("[.]");
    } else {
      newString.push(split[i]);
    }
  }
  return newString.join("");
};
