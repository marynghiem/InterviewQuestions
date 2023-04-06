//https://leetcode.com/problems/convert-the-temperature/description/
var convertTemperature = function (celsius) {
  let kelvin;
  let fahrenheit;
  kelvin = celsius + 273.15;
  fahrenheit = celsius * 1.8 + 32.0;

  return [kelvin, fahrenheit];
};
