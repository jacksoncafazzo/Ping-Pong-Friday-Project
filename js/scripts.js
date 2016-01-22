var getNumberArray = function (userNumber) {
  var numberArray = [];
  for (var i = 1; i <= userNumber; i++) {
    numberArray.push(i);
  }
  // var resultString = numberArray.join(" * ");
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
