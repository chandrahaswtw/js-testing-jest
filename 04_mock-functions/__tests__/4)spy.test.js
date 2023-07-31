/*
jest.spyOn is similar to jest.fn
The biggest advantage of jest.spyOn over jest.fn is that function mocked using jest.spy can be restored to its original implementation using mockfn.mockRestore()
*/
const foobar = require("./../src/foo-bar");
const getterSetter = require("./../src/getter-setter");

afterEach(() => {
  // restore the spy created with spyOn.
  // It will only work on spy.
  jest.restoreAllMocks();
});

describe("Spy testing", () => {
  it("Spy foo-bar testing with 2 parameters", () => {
    // Spy can take 2 paramaters: First is the module, second is the key it need to spy
    const mockFn = jest.spyOn(foobar, "funcSpy").mockImplementation(() => 5);

    // After this foobar becomes below:
    // Spy just mocks the particular key and other remain untouched.
    // {
    //   func: [Function: func],
    //   funcSpy: [Function: mockConstructor] {
    //     _isMockFunction: true,
    //     getMockImplementation: [Function (anonymous)],
    //     mock: [Getter/Setter],
    //     mockClear: [Function (anonymous)],
    //     mockReset: [Function (anonymous)],
    //     mockRestore: [Function (anonymous)],
    //     mockReturnValueOnce: [Function (anonymous)],
    //     mockResolvedValueOnce: [Function (anonymous)],
    //     mockRejectedValueOnce: [Function (anonymous)],
    //     mockReturnValue: [Function (anonymous)],
    //     mockResolvedValue: [Function (anonymous)],
    //     mockRejectedValue: [Function (anonymous)],
    //     mockImplementationOnce: [Function (anonymous)],
    //     withImplementation: [Function: bound withImplementation],
    //     mockImplementation: [Function (anonymous)],
    //     mockReturnThis: [Function (anonymous)],
    //     mockName: [Function (anonymous)],
    //     getMockName: [Function (anonymous)]
    //   },
    //   key1: 1,
    //   key2: 2,
    //   key3: { func: [Function: func] }
    // }

    // We are calling the actual function foobar.funcSpy()
    const funcSpyValue = foobar.funcSpy();
    // Now the mockFn is executed as we mocked.
    expect(mockFn).toHaveBeenCalled();
    expect(funcSpyValue).toBe(5);
    mockFn.mockRestore();

    // Since we done the mockFn.restore(), the mock is disabled and calling the actual function.
    expect(foobar.funcSpy()).toBe(6);
  });

  it("Spy setter, getter testing with 3 parameters", () => {
    // Spy can take 2 paramaters: First is the module, second is the key it need to spy
    const mockFn = jest.spyOn(getterSetter, "name", "set");
    getterSetter.name = "JEST";
    expect(mockFn).toHaveBeenCalled();
    expect(getterSetter.name).toBe("JEST");
  });
});
