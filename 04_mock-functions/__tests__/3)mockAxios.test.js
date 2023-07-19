// We call this style of mocks -> Automatic mock

const axios = require("axios");

const getAllUsers = () => {
  // Just ignore the json file mentioned here. We will mock it.
  return axios.get("/users.json").then((resp) => resp.data);
};

// Add this outside describe.
jest.mock("axios");

// This is a good practice to clear the mocks before each test.
// This clears all the instances, constructor function and all the methods.
beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  // Note: If there are deep mocks, we need to clear mocks as below axios.get.mockClear() is required and axios.mockClear() doesn't automatically taek care of this.
  axios.mockClear();
  axios.get.mockClear();
});

describe("Mock third party libraries", () => {
  it("Way 1 : Mock axios", () => {
    // Add this outside describe.
    // jest.mock('axios')
    const users = [{ name: "Bob" }];
    const resp = { data: users };
    axios.get.mockImplementation(() => Promise.resolve(resp));

    // We can use this as well.
    // axios.get.mockResolvedValue(resp);

    expect(getAllUsers()).resolves.toEqual(users);
  });

  // NOTE: Nothing special in way 2, just another alternate way
  it("Way 2 : Mock axios alternate way", () => {
    // Add this outside describe.
    // jest.mock('axios')
    const users = [{ name: "Bob" }];
    const resp = { data: users };
    axios.get.mockReturnValue(Promise.resolve(resp));

    // We can use this as well.
    // axios.get.mockResolvedValue(resp);
    expect(getAllUsers()).resolves.toEqual(users);
    expect(axios.get).toHaveBeenCalledWith("/users.json");
  });
});
