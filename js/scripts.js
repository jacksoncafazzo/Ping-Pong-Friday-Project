var getNumberArray = function (userNumber) {
  // debugger;
  var numberArray = [];
  var arrayValue;
  for (var i = 0; i < userNumber; i++) {
    arrayValue = (i + 1);
    arrayValue = pingReplacer(arrayValue);
    arrayValue = pongReplacer(arrayValue);
    arrayValue = pingpongReplacer(arrayValue);
    numberArray.push(arrayValue);
  }
  return numberArray;
}

var pingReplacer = function (arrayValue) {
  if (arrayValue % 3 === 0) {
    var arrayValue = 'pIng'
  }
  return arrayValue
}

var pongReplacer = function (arrayValue) {
  if (arrayValue % 5 === 0) {
    var arrayValue = 'poNg'
  }
  return arrayValue
}

var pingpongReplacer = function (arrayValue) {
  if (arrayValue % 15 === 0) {
    var arrayValue = 'pIngPoNg'
  }
  return arrayValue
}

// $(document).ready(function() {

  // });
// });
