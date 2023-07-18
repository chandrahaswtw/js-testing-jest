// Resolve promise
const asyncPromiseResolve = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Jest testing");
    }, 1000);
  });
};

// Reject with an error object
const asyncPromiseRejectThrowErrorObject = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej(new Error("Rejected"));
    }, 1000);
  });
};

// Reject with a test message
const asyncPromiseRejectThrowErrorMessage = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("Rejected");
    }, 1000);
  });
};

describe("General promise testing", () => {
  // We must place a return statement before we are resolving a promise.
  it("Promise testing in normal way", () => {
    return asyncPromiseResolve().then((val) => {
      expect(val).toBe("Jest testing");
    });
  });
});

describe("Recommended way of testing promises", () => {
  // We must place a return statement before we are resolving a promise.
  // Using expect().resolves
  it("Resolving using .resolves()", () => {
    return expect(asyncPromiseResolve()).resolves.toBe("Jest testing");
  });

  // toThrow is used if error object is thrown in reject.
  // We must place a return statement before we are resolving a promise.
  it("the fetch fails with an error", () => {
    return expect(asyncPromiseRejectThrowErrorObject()).rejects.toThrow(
      "Rejected"
    );
  });

  // toMatch or toBe is used if error message is sent in reject.
  // As we know toMatch is used in case to check the regular expressions.
  // We must place a return statement before we are resolving a promise.
  it("the fetch fails with an error", () => {
    return expect(asyncPromiseRejectThrowErrorMessage()).rejects.toMatch(
      "Rejected"
    );
  });
});
