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
    var listItem = ("<li>" + arrayValue + "</li>");
    listItemList = listItemList.concat(listItem);
  }
  return listItemList;
}

$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    $(".results").empty();
    var userInput = $("input#userInput").val();
    // debugger;
    var arrayToList = getNumberArray(userInput);
    $(".results").append(arrayToList);

    event.preventDefault();
  });
});
