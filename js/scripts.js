var wordPuzzle = function(sentence) {
  sentence = sentence.replace(/a|e|i|o|u/gi, "-");
  return sentence;
}


$(document).ready(function() {
  $("form#wordPuzzle").submit(function(event) {

    var userInput = $("input#sentence").val();
    var puzzleResult = wordPuzzle(userInput);
    // var puzzleResult = wordPuzzle.replace(/a|e|i|o|u/gi, "-");

    $(".puzzleResult").text(puzzleResult);
    $(".result").show();

    event.preventDefault();
  });
});
