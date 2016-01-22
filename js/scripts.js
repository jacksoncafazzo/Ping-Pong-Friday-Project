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

var arrayToList = function () {
  var listItemList = "";
  for (i = 0; i < numberArray.length; i++) {
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
