const lodash = require("lodash");

// We don't need the jest.mock("lodash") at all if we mock the node modules. This is done automatically for us.
// If we wish to unmock and use actual lodash, we use jest.unmock("lodash");
// Make user to add "lodash" in ""

// IMPORTANT NOTE: If we are using an inbuilt node module and we wish to mock it, we must do the same steps along with mentioning jest.mock("node module")

describe("Manual mocks", () => {
  it("Testing lodash repeat", () => {
    expect(lodash.repeat("a", 3)).toBe("bbb");
  });

  it("Testing lodash uppercase - as it is from lodash", () => {
    // This happens as we used requireActual() in __mocks__
    expect(lodash.upperCase("aaa")).toBe("AAA");
  });
});
