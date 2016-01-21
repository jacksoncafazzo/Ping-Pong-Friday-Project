var remainder = function(userInput) {
  var numberList = [];
  var finalResult = [];

  for (var i = 0; i <= userInput; i ++) {
    // for (var j = 0; j <= userInput; j++) {
      if (userInput[i] % 3 === 0) {
          userInput[i] = "pong";
      } else if {
        (userInput[i] % 5 === 0);
        userInput[i] = "ping";
      } else if {
        (userInput[i] % 15 === 0);
        userInput[i] = "pingpong";
      }
      finalResult.push(userInput[i]);
    }
  }
  return finalResult
}
