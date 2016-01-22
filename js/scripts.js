var getNumberArray = function (userNumber) {
  var numberArray = [];
  var arrayValue;
  for (var i = 0; i < userNumber; i++) {
    arrayValue = (i + 1);
    arrayValue = pingpongReplacer(arrayValue);
    arrayValue = pongReplacer(arrayValue);
    arrayValue = pingReplacer(arrayValue);
    numberArray.push(arrayValue);
  }
  return arrayToList(numberArray);
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

var arrayToList = function (numberArray) {
  var listItemList = "";
  for (var i = 0; i < numberArray.length; i++) {
    var arrayValue = numberArray[i];
    if (i + 1 < numberArray.length) {
      var listItem = "<li>" + arrayValue + "</li>,";
    } else {
      var listItem = "<li>" + arrayValue + "</li>";
    }
    listItemList = listItemList.concat(listItem);
  }

  return listItemList;
}
// $(document).ready(function() {

  // });
// });
