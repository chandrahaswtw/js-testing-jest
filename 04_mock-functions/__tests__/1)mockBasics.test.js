// This function loops through array of items and passes to callback
const forEachFunc = (items, callback) => {
  for (let i of items) {
    callback(i);
  }
};

describe("Mock functions", () => {
  it("Basic Mocking", () => {
    mockFunc = jest.fn((a, b) => a + b);

    // Call the function
    mockFunc(1, 2);

    // The mock function was called at least once
    expect(mockFunc.mock.calls.length).toBeGreaterThan(0);
    // Simpler version for above
    expect(mockFunc).toHaveBeenCalled();

    // The mock function was called at least once with the specified args
    expect(mockFunc.mock.calls).toContainEqual([1, 2]);
    // Simpler version for above
    expect(mockFunc).toHaveBeenCalledWith(1, 2);

    // The last call to the mock function was called with the specified args
    expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1]).toEqual([1, 2]);
    // Simpler version for above
    expect(mockFunc).toHaveBeenLastCalledWith(1, 2);
  });

  it("Testing parameters, function calls", () => {
    // Inside jest.mock we pass a function as parameter
    const mockFunc = jest.fn((x) => x + 3);

    forEachFunc([21, 22, 23], mockFunc);

    // Check how many calls are made
    expect(mockFunc.mock.calls).toHaveLength(3);

    //(Recommended) We can use this as well to track the number of times a function been called.
    expect(mockFunc).toHaveBeenCalledTimes(3);

    // There are no simpler version for all the below as we are testing multiple calls at once.

    // Check if first argument of first call is 21
    expect(mockFunc.mock.calls[0][0]).toBe(21);

    // Check if first argument of second call is 22
    expect(mockFunc.mock.calls[1][0]).toBe(22);

    // Check if first argument of third call is 23
    expect(mockFunc.mock.calls[2][0]).toBe(23);

    // To check the firts parameter sent in last call.
    // This is equivalent to expect(mockFunc.mock.calls[2][0]).toBe(23);
    expect(mockFunc.mock.lastCall[0]).toBe(23);

    // Results of first call
    expect(mockFunc.mock.results[0].value).toBe(24);
  });

  it("About .mock instances and contexts", () => {
    // We can track how many instances of mock functions are created.
    const mockFunc1 = jest.fn();
    const a = new mockFunc1();
    // Adding name to the created instance
    a.name = "Jest";
    console.log(mockFunc1.mock.instances);
    // > [ <a> ] typically return an array and we can perform checks
    expect(mockFunc1.mock.instances).toHaveLength(1);
    expect(mockFunc1.mock.instances[0].name).toBe("Jest");

    // We can even track the .this binds as below
    const mockFunc2 = jest.fn();
    const contextObject = { name: "Jest" };
    const bound = mockFunc2.bind(contextObject);
    bound();
    console.log(mockFunc2.mock.contexts);
    // > [ {name : "Jest"} ] typically return an array and we can perform checks
    // We are checking whether the context object is toBe the 'b
    expect(mockFunc2.mock.contexts[0]).toBe(contextObject);
  });

  it("mock return values", () => {
    const mockFunc1 = jest.fn();

    // So each time when function executes, it returns a value as specified.
    mockFunc1
      .mockReturnValueOnce(1)
      .mockReturnValueOnce("x")
      .mockReturnValueOnce(true);

    expect(mockFunc1()).toBe(1);
    expect(mockFunc1()).toBe("x");
    expect(mockFunc1()).toBe(true);

    // Application of mock return values

    const mockFunc2 = jest.fn();
    mockFunc2.mockReturnValueOnce(true).mockReturnValueOnce(false);
    const filteredArray = [11, 23].filter((el) => mockFunc2(el));

    // Since during the second call it returned false, hence the array will be only [11]
    expect(filteredArray).toEqual([11]);

    // Since we are passing the el to mockFunc2() as parameter and hence it works.
    expect(mockFunc2.mock.calls[0][0]).toBe(11);
    expect(mockFunc2.mock.calls[1][0]).toBe(23);
  });

  it("mock names", () => {
    const mockFunc = jest.fn().mockName("add42");
    expect(mockFunc.getMockName()).toBe("add42");
  });
});

/*

NOTE1: 
If we print console.log(jest.fn()) it gives this
[Function: mockConstructor] {
        _isMockFunction: true,
        getMockImplementation: [Function (anonymous)],
        mock: [Getter/Setter],
        mockClear: [Function (anonymous)],
        mockReset: [Function (anonymous)],
        mockRestore: [Function (anonymous)],
        mockReturnValueOnce: [Function (anonymous)],
        mockResolvedValueOnce: [Function (anonymous)],
        mockRejectedValueOnce: [Function (anonymous)],
        mockReturnValue: [Function (anonymous)],
        mockResolvedValue: [Function (anonymous)],
        mockRejectedValue: [Function (anonymous)],
        mockImplementationOnce: [Function (anonymous)],
        withImplementation: [Function: bound withImplementation],
        mockImplementation: [Function (anonymous)],
        mockReturnThis: [Function (anonymous)],
        mockName: [Function (anonymous)],
        getMockName: [Function (anonymous)]
      }

NOTE2:
func = jest.fn(()=> 5)
func() will return 5
var obj =  new func()
obj ==> {}  Empty object

NOTE3:
func = jest.fn(()=> {
  return {key : 5}
})
func() will return {key : 5}  Same as above
var obj = new func()
obj ==> {key : 5}
*/
