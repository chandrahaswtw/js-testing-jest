const sum = require('./sum');

/* 
    describe ("Test suite",() => {})  The call back cannot be async
    Every test will begin with it("A message", ()=>{ Test statements here })
    We can even use "test" instead of "it"
*/

describe("Start", () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
})

