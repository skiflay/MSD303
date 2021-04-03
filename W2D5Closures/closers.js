"use strict";

/**
 * 
 * @returns {function}
 */
function makeCounter(){
    let count =0;
    //value of counter before increment
    return function(){
        return count ++;
    }
}
const counter1 = makeCounter()
//const counter1 = makeCounter()
const counter2 = makeCounter()
// console.log(counter1())
// console.log(counter1())

//Notes
//JavaScript variables can belong to the local or global scope.
//Global variables can be made local (private) with closures.

// Initiate counter
let counter = 0;

// Function to increment counter
function add() {
  return counter += 1;
}

// console.log(add());
// console.log(add());
// console.log(add());
// console.log(counter)


function add() {
  let counter = 0;
  return function(){
  return counter ++;
}
}
const add1 = add()
console.log(add1())
console.log(add1())
console.log(add())

    let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

//console.log(sayHi());
// in the above if close, the sayHi should be error bcz of scope works, however, in non-strict mood
// this is working bcz fun declaration is working out of scope blocks.

setTimeout(()=> console.log('hello'), 0)
console.log('world')
console.log('simon')