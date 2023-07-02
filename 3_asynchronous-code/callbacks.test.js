function asyncCallBack(callback) {
  setTimeout(() => {
    callback("Jest testing");
  }, 2000);
}

describe("Testing asynchronous callbacks", () => {
  // We fetch done from it() and execute done() to make sure the async callback executes properly.
  // If we fetch done in it() and didn't call it, it times out and fails.
  it("Async callback should work", (done) => {
    function callbackFunction(data) {
      expect(data).toMatch("Jest testing");
      done();
    }
    asyncCallBack(callbackFunction);
  });
});
