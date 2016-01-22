describe("getNumberArray", function(userNumber) {
  it("outputs an array from 1 to userNumber with pIng for 3", function() {
    expect(getNumberArray(3)).to.eql([1,2,'pIng']);
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
