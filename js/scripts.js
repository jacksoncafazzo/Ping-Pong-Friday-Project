var wordPuzzle = function(sentence) {
  sentence = sentence.replace(/a|e|i|o|u/gi, "-");
  return sentence;
}


$(document).ready(function() {
  $("form#wordPuzzle").submit(function(event) {

    var userInput = $("input#sentence").val();
    var puzzleResult = wordPuzzle(userInput);
    // var puzzleResult = userInput.replace(/a|e|i|o|u/gi, "-");

    $(".puzzleResult").text(puzzleResult);
    $("#modal").modal('show');

    event.preventDefault();
  });
});
