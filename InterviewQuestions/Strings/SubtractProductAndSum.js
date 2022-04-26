//https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

//my solution
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

//better solution, try again later
var subtractProductAndSum = function (n) {
  let product = 1,
    sum = 0;
  while (n > 0) {
    const digit = n % 10; //if given 123, digit would be 3
    n = parseInt(n / 10); // if given 123, n/10 would give 12.3 but parse int would turn it into an integer
    product = product * digit;
    sum += digit;
  }
  return product - sum;
};
