const user = require("../user/user");

// We don't need the below if we make autoMock: true in jest.config.json
// We need to mention the full path.
jest.mock("./../user/user");

describe("Manual mocks", () => {
  it("Testing basic mock of users", () => {
    expect(user.name).toBe("mock user");
  });
});
