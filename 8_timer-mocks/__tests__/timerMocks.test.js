const { timerGame, doubleTimer } = require("./../src/timerExample");

beforeEach(() => {
  // We are using fake timers
  jest.useFakeTimers();
  //   We will be studying about the spy on jest object section.Just make sure to add this while testing timers.
  jest.spyOn(global, "setTimeout");
});

afterEach(() => {
  // After all tests switching back to old.
  jest.useRealTimers();
});

// We need to clear all timers after each test. This is because we are using the timerGame in multiple tests and it affects other tests. To avoid it we need to clear and unclear after every test to have a fresh start.

describe("Jest timer mocks", () => {
  it("Check for settimeout executions", () => {
    // We are not passing any callback
    timerGame();

    // Checking if the internal SetTimeout defined is called.
    expect(setTimeout).toHaveBeenCalledTimes(1);

    // Checking if the internal SetTimeout is called with any function and a timeout of 1000.
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });

  it("Run all timers and check for internal function executions", () => {
    const callBackMock = jest.fn();

    // This does not run the timer, but only starts setTimeOut()
    timerGame(callBackMock);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);

    // We are not expecting the timer to run
    expect(callBackMock).not.toHaveBeenCalled();

    // We are running all the timers.
    jest.runAllTimers();

    // Now we are checking.
    expect(callBackMock).toHaveBeenCalled();
  });

  it("Run timers oen by one", () => {
    const callBackMock = jest.fn();

    // This does not run the timer, but only starts setTimeOut()
    doubleTimer(callBackMock);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);

    // We are not expecting the timer to run
    expect(callBackMock).not.toHaveBeenCalled();

    // Now run the second nested timer.
    jest.runOnlyPendingTimers();

    // It goes another level and we get the setTimeout now called twice.
    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);

    //  We are now running the second timer as well.
    jest.runOnlyPendingTimers();

    expect(callBackMock).toHaveBeenCalled();
  });
});

// jest.clearAllTimers() is used to clear the remaining pending tests.
