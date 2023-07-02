// This function loops through array of items and passes to callback
const forEachFunc = (items, callback) => {
  for (let i of items) {
    callback(i);
  }
};

describe("Mock functions", () => {
  it("Testing parameters, function calls", () => {
    // Inside jest.mock we pass a function as parameter
    const mockFunc = jest.fn((x) => x + 3);

    forEachFunc([21, 22, 23], mockFunc);

    // Check how many calls are made
    expect(mockFunc.mock.calls).toHaveLength(3);

    // Check if first argument of first call is 21
    expect(mockFunc.mock.calls[0][0]).toBe(21);

    // Check if first argument of second call is 22
    expect(mockFunc.mock.calls[1][0]).toBe(22);

    // Check if first argument of third call is 23
    expect(mockFunc.mock.calls[2][0]).toBe(23);

    // Results of first call
    expect(mockFunc.mock.results[0].value).toBe(24);
  });
});
