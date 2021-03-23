"use strict";
const assert = require("assert");
const executor = require("./exer");

/* eslint-disable */
/* write functions executor, add, and mult as defined by the test below */
describe("executor", function(){
it ("tests add", function(){
assert.strictEqual(executor(add, 5, 10), 15);
});
it("tests mult", function(){
assert.strictEqual(executor(mult, 5, 10), 50);
});
});
