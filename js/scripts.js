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

// $(document).ready(function() {

  // });
// });
