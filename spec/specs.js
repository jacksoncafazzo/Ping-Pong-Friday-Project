describe("wordPuzzle", function(sentence) {
  it("is true if there are vowels in the sentence", function () {
    expect(wordPuzzle("Banana")).to.equal(true);
  });

  it ("it should replace a vowel with a dash", function() {
    expect(wordPuzzle("Hi friend")).to.equal("H- fr--nd");
  });
});
