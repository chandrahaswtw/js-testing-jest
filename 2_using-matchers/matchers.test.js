describe("Jest matchers", () => {
  it("Check integers", () => {
    // Equality
    // Both .toBe and .toEqual works for integers.
    expect(1 + 2).toBe(3);
    expect(1 + 2).toEqual(3);

    // Greater, lesser
    expect(3).toBeGreaterThan(2);
    expect(3).toBeGreaterThanOrEqual(2.5);
    expect(3).toBeLessThan(4);
    expect(3).toBeLessThanOrEqual(4.5);
  });

  it("Check float values", () => {
    // Both .toBe and .toEqual does not work for float due to rounding issues.
    // Use toBeCloseTo()
    expect(0.3).toBeCloseTo(0.3);
  });

  it("Check strings", () => {
    // Use .toMatch(regex) to check strings

    // If we are testing the exact string we can use .toBe
    expect("abc").toBe("abc");

    // Below we used regex
    expect("abcde").toMatch(/abc/);
  });

  it("Check objects", () => {
    // .toEqual works .toBe doesn't work
    const obj = { a: 5 };
    obj.b = 3;
    expect(obj).toEqual({ a: 5, b: 3 });
  });

  it("Check arrays", () => {
    // Arrays equality
    // Just like objects .toEqual works .toBe doesn't work
    const arr = [1, 2, 3];
    arr.push(4);
    expect(arr).toEqual([1, 2, 3, 4]);

    // Arrays contain check to see if an element is present
    expect(arr).toContain(3);
  });

  it("Testing how .not works", () => {
    // After expect() use .not and this works. Also .not is not a function
    expect(1 + 2).not.toBe(4);
  });

  it("Truthiness check", () => {
    // toBeNull matches only null
    // toBeUndefined matches only undefined
    // toBeDefined is the opposite of toBeUndefined
    // toBeTruthy matches anything that an if statement treats as true
    // toBeFalsy matches anything that an if statement treats as false
    expect(null).toBeNull();
    expect(undefined).toBeUndefined();
    expect(undefined).not.toBeDefined();
    expect(1).toBeTruthy();
    expect(0).toBeFalsy();
  });

  it("Exception check", () => {
    // In expect() we pass a function and make the function call
    // We can use these 4 forms to check the error.
    // .toThrow()
    // .toThrow(Error)
    // .toThrow(Actual exact error message)
    // .toThrow(regexp)
    function exceptionCode() {
      throw new Error("you are seeing error!");
    }
    expect(() => exceptionCode()).toThrow();
    expect(() => exceptionCode()).toThrow(Error);
    expect(() => exceptionCode()).toThrow("you are seeing error!");
    expect(() => exceptionCode()).toThrow(/you are seeing error!/);
  });
});
