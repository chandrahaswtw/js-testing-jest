it("sum test", () => {
  const fn = jest.fn(() => 5);
  expect(fn()).toBe(5);
});
