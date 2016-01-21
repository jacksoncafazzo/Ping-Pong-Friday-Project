var wordPuzzle = function(sentence) {
  var vowelArray = ["a", "e", "i", "o", "u"];

  sentence = sentence.replace(/a/gi, "-").replace(/e/gi, "-").replace(/i/gi, "-").replace(/o/gi, "-").replace(/u/gi, "-");

  return sentence;
}

//
// $(document).ready(function(){
//   $("form#countUpBy").submit(function(event) {
//
//     event.preventDefault();
//   });
// });




// var wordPuzzle = function(sentence) {
//   var vowelArray = ["a", "e", "i", "o", "u"];
//   var letters = sentence.split("");
//
//   for (var i = 0; i < letters.length; i++) {
//     for (var j = 0; j < vowelArray.length; j++) {
//       if (letters[i] === vowelArray[j]) {
//         var result = letters[i].replace(letters[i],'-');
//       }
//       console.log(letters[i])
//     }
//   }
//   if (result === undefined) {
//     return false;
//   }
//   return result;
// }
