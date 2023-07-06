const convertToCelsius = function (temp) {
  let first = temp - 32;
  let second = first * (5 / 9);
  let round = second.toFixed(1);
  let convert = parseFloat(round);
  return convert;
};

const convertToFahrenheit = function (temp) {
  let equation = temp * (9 / 5) + 32;
  let round = equation.toFixed(1);
  let convert = parseFloat(round);
  return convert;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
