//Buggy solution because of the parseInt will not allow to add big numbers
var addBinary = function (a, b) {
  return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
};
