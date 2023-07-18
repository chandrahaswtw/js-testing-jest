// WAY 1) What we are doing below is ignoring all the other funtionality of lodash and it has only repeat.
// module.exports = {
//   repeat() {
//     return "bbb";
//   },
// };
// DISADVANTAGE: If we need to use any other function, from lodash, it returns error as we did't specify the mock yet.

// WAY 2) This mocks all the internal functions using jest.fn() and we can override functionality as mentioned.
// const lodash = jest.createMockFromModule("lodash");
// lodash.repeat = () => "bbb";
// module.exports = lodash;

// WAY 2)We can override a functionality as mentioned and other functinality we get as it is from lodash
const lodash = jest.requireActual("lodash");
lodash.repeat = () => "bbb";
module.exports = lodash;
