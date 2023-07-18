// We call this style of mocks -> Automatic mock

const foobar = require("../src/foo-bar");

// Add this outside describe.
jest.mock("../src/foo-bar");

// This is a good practice to clear the mocks before each test.
// This clears all the instances, constructor function and all the methods.
beforeEach(() => {
  foobar.func.mockClear();
});

//The above combination mocks every key that returned frm the foobar

describe("Mock imported modules", () => {
  it("Prove all the values are mocked", () => {
    console.log("foobar is", foobar);
    console.log("func is", foobar.func);
    console.log("key1 is", foobar.key1);
    console.log("key2 is", foobar.key2);
    console.log("key3 is", foobar.key3);

    // The above object mocked as below:
    /* 
    {
        func: jest.fn(),
        key1: 1,
        key2: 2,
        key3: {
            func: jest.fn(),
        },
    }
    */
  });

  it("mock imported modules", () => {
    // Don't forget to add the folder path outside describe as jest.mock("./foo-bar");
    // When we use the above statement, we can use .mockImplementation() directly in imported function.
    foobar.func.mockImplementation(() => 42);
    expect(foobar.func()).toBe(42);

    // Twice
    foobar.func
      .mockImplementationOnce(() => true)
      .mockImplementationOnce(() => false);
    expect(foobar.func()).toBe(true);
    expect(foobar.func()).toBe(false);

    // The .mockImplementationOnce also available directly on jest.fn(). See below
    // Infact the above foo has a jest.fn() wrapper around it when we just done jest.mock("./foo-bar")

    //mockImplementationOnce chain returns values first and the turns to default implementation
    const mockFunc1 = jest
      .fn(() => "default")
      .mockImplementationOnce(() => "first call")
      .mockImplementationOnce(() => "second call");

    expect(mockFunc1()).toBe("first call");
    expect(mockFunc1()).toBe("second call");
    expect(mockFunc1()).toBe("default");
    expect(mockFunc1()).toBe("default");
  });
});
