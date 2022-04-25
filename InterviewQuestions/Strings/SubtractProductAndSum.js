//https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

var subtractProductAndSum = function (n) {
  let numAsStrings = n.toString();
  let product = 1;
  let sum = 0;
  for (let i = 0; i < numAsStrings.length; i++) {
    product = product * numAsStrings[i];
    console.log(product);
    sum = sum + parseInt(numAsStrings[i]);
    console.log(sum);
  }
  let result = product - sum;
  return result;
};
