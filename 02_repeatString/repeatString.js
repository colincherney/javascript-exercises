const repeatString = function (string, num) {
  if (num >= 0) {
    let full = "";

    for (let i = 0; i < num; i++) {
      full = string + full;
    }
    return full;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
