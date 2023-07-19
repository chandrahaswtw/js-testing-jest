//Module that identifies the primitive type of any JavaScript value.
const { getType } = require("jest-get-type");

const array = [1, 2, 3];
const obj = { a: 1 };
const nullValue = null;
const undefinedValue = undefined;

console.log(getType(array)); // prints 'array'
console.log(getType(obj)); // prints 'object'
console.log(getType(nullValue)); // prints 'null'
console.log(getType(undefinedValue)); // prints 'undefined'
