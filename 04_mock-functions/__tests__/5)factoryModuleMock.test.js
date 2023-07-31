// We call this style of mocks -> Automatic mock

const foobar = require("../src/foo-bar");

// Add this outside describe.
// This is a mock where we replaced the entire module with our own mock.
// The mock is what we return in the second parameter.
jest.mock("../src/foo-bar", () => {
  return jest.fn(() => 10);
});

// This is a good practice to clear the mocks before each test.
// This clears all the instances, constructor function and all the methods.
beforeEach(() => {
  foobar.mockClear();
});

describe("Factory Mock imported modules", () => {
  it("Testing how factory mock works", () => {
    // Foobar is just a jest.fn()
    console.log("foobar after factory mock is", foobar);
    // The value is 10
    expect(foobar()).toBe(10);
  });
});
