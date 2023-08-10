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

// IMPORTANT NOTE 1
/*
There might be a case where you don't want to mock everything inside a 3rd party module:
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
  useNavigate: jest.fn(),
}));
*/

// IMPORTANT NOTE 2
/*
The issue with 3rd party libraries is that if we write a mock statement as below:
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(() => 5),
  useNavigate: jest.fn(),
}));
The useParams() will be a mocked fn (jest.fn()) might not return 5 due to many reasons of how the original module is created.
To combat this we will do as below:

STEP 1: Import the original functionalties from the module
import {useParams, useNavigate } from "react-router-dom";

STEP 2: Selectively mock without specifying the return statements:
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
  useNavigate: jest.fn(),
}));

STEP 3: Mock them in the individual test case:
it("Should render posts component", async () => {
    useParams.mockReturnValue({ id: 44 });
})

This does a clean job.
*/
