describe("getNumberArray", function(userNumber) {
  it("outputs an array from 1 to userNumber with pIng for 3", function() {
    expect(getNumberArray(3)).to.eql([ 1, 2, 'pIng' ]);
  });

  it("outputs an array from 1 to userNumber with pIng for 3 and poNg for 5", function() {
    expect(getNumberArray(5)).to.eql([ 1, 2, 'pIng', 4, 'poNg' ]);
  });

  it("outputs as array from 1 to userNumber replacing ping, pong and pingpong", function() {
    expect(getNumberArray(15)).to.eql([1, 2, "pIng", 4, "poNg", "pIng", 7, 8, "pIng", "poNg", 11, "pIng", 13, 14, "pIngPoNg"]);
  });
  //
  // it("turns array values into an unordered list items", function() {
  //   expect(getNumberArray(3)).to.equal('<li>1</li><li>2</li><li>pIng</li>');
  // });
});

describe("arrayToCols", function() {
  it("turns array values into a group of 13", function() {
    expect(arrayToCols(15)).to.equal([1,2,3,4,5,6,7,8,9,10,11,12,13]);
  });
});
