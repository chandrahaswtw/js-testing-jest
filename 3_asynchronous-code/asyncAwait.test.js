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

describe("General Async await testing", () => {
  it("Resolve case", async () => {
    const data = await asyncPromiseResolve();
    expect(data).toBe("Jest testing");
  });

  it("Reject case -> Error object", async () => {
    try {
      await asyncPromiseRejectThrowErrorObject();
    } catch (e) {
      // When error object is thrown the actual message will be on e.message
      expect(e.message).toBe("Rejected");
    }
  });

  it("Reject case -> Error message", async () => {
    // Use expect.assertions(1) where ever possible as if promise is resolved successfully, and didn't touch the catch block it doesn't go to catch block.
    // We are forcing to have 1 assertion here.
    expect.assertions(1);
    try {
      await asyncPromiseRejectThrowErrorMessage();
    } catch (e) {
      // When reject message is sent, it will be available directly.
      expect(e).toBe("Rejected");
    }
  });
});

// Recommended
describe("Recommended await testing", () => {
  it("Resolve case", async () => {
    await expect(asyncPromiseResolve()).resolves.toBe("Jest testing");
  });

  it("Reject case -> Error object", async () => {
    await expect(asyncPromiseRejectThrowErrorObject()).rejects.toThrow(
      "Rejected"
    );
  });

  it("Reject case -> Error message", async () => {
    await expect(asyncPromiseRejectThrowErrorMessage()).rejects.toBe(
      "Rejected"
    );
  });
});
