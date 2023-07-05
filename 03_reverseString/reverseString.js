const reverseString = function (str) {
  let length = str.length;
  let letters = "";

  for (i = 0; length > i; i++) {
    letters = str[i] + letters;
  }
  return letters;
};

// Do not edit below this line
module.exports = reverseString;
