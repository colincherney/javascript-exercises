const removeFromArray = function () {
  let Array = arguments[0];
  for (i = 1; arguments.length > i; i++) {
    let index = Array.indexOf(arguments[i]);
    if (index > -1) {
      Array.splice(index, 1);
    } else {
      console.log("Value not in array!");
    }
  }
  return Array;
};

// Do not edit below this line
module.exports = removeFromArray;
