var getNumberArray = function (userNumber) {
  var numberArray = [];
  var arrayValue;
  for (var i = 0; i < userNumber; i++) {
    arrayValue = (i + 1);
    if (arrayValue % 15 === 0) {
      var arrayValue = 'pIngPoNg';
    } else if (arrayValue % 5 === 0) {
      var arrayValue = 'poNg';
    } else if (arrayValue % 3 === 0) {
      var arrayValue = 'pIng';
    }
    numberArray.push(arrayValue);
  }
  return numberArray;
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

var arrayToCols = function (userNumber) {
  var numberArray = getNumberArray(userNumber);
  var index = numberArray.length;
  // debugger;
   if (index <= 13) {
    var arrayCol = arrayToList(numberArray);
  }
  console.log(arrayToList(numberArray));
  console.log(numberArray);
  return arrayCol;
}


$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    $(".results").empty();
    var userInput = $("input#userInput").val();
    // debugger;
    var arrayToList = arrayToCols(userInput);
    $(".results").append(arrayToList);

    event.preventDefault();
  });
});
