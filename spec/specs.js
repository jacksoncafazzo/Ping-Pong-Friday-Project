describe("getNumberArray", function(userNumber) {
  // it("outputs an string of numbers from 1 to userNumber with * in between", function() {
  //   expect(getNumberArray(2)).to.equal("1 * 2");
  // });

  it("outputs an array from 1 to userNumber", function() {
    expect(getNumberArray(3)).to.eql([1,2,3]);
  });
});

describe("pingReplacer", function() {
  it("replaces numbers divisible by 3 with 'ping'", function() {
    expect(pingReplacer(9)).to.equal("pIng");
  });
});

describe("pongReplacer", function() {
  it("replaces numbers divisible by 5 with 'poNg'", function() {
    expect(pongReplacer(10)).to.equal("poNg");
  });
});

describe("pingpongReplacer", function() {
  it("replaces numbers divisible by 15 with 'pIngPoNg'", function() {
    expect(pingpongReplacer(30)).to.equal("pIngPoNg");
  });
});
