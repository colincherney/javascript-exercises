const sumAll = function (num1, num2) {
  let sum = 0;
  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }
  if (Number.isInteger(num1) && Number.isInteger(num2)) {
    if (num1 < num2) {
      let difference = num2 - num1 + 1;
      let startingNum = num1;
      for (i = startingNum; i <= difference; i++) {
        sum = sum + i;
      }
      return sum;
    }
    if (num2 < num1) {
      let difference = num1 - num2 + 1;
      let startingNum = num2;
      for (i = startingNum; i <= difference; i++) {
        sum = sum + i;
      }
      return sum;
    }
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
