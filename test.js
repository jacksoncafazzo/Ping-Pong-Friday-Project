var remainder = function(userInput) {
  var finalResult = [];

  for (var i = 0; i <= userInput; i ++) {
    if (userInput[i] % 3 === 0) {
        userInput = "pong";
    } else if (userInput[i] % 5 === 0) {
      userInput = "ping";
    } else if (userInput[i] % 15 === 0); {
      userInput = "pingpong";
    }
    finalResult = finalResult.appendTo(userInput);
  }
  return finalResult
}
