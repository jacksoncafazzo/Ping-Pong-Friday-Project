describe("getNumberArray", function(userNumber) {
  it("outputs an string of numbers from 1 to userNumber with * in between", function() {
    expect(getNumberArray(2)).to.equal("1 * 2");
  });

  it("outputs an array from 1 to userNumber", function() {
    expect(getNumberArray(3)).to.equal([1,2,3]);
  });


});
