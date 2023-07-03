// Executes at the beginning of first test.
beforeAll(() => {
  console.log("Before all");
});

// Executes after end of last test.
afterAll(() => {
  console.log("After all");
});

// Global to this file.
// Executes at begin of every test described in this file.
beforeEach(() => {
  console.log("Before each outside");
});

// Global to this file.
// Executes after end of every test described in this file.
afterEach(() => {
  console.log("After each outside");
});

describe("setup and teardown", () => {
  // Local to this file.
  // Executes at begin of every test described in this describe function.
  beforeEach(() => {
    console.log("Before each inside");
  });

  // Local to this file.
  // Executes at begin of every test described in this describe function.
  afterEach(() => {
    console.log("After each inside");
  });

  it("Sample test1", () => {
    expect([1, 2, 3]).toHaveLength(3);
  });

  it("Sample test2", () => {
    expect([1, 2, 3]).toHaveLength(3);
  });
});

// ----- The execution order is as follows:
// Before all
// Before each outside
// Before each inside
// After each inside
// After each outside
// Before each outside
// Before each inside
// After each inside
// After each outside
// After all
