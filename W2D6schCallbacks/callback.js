"use strict";

function sayHi(){
    console.log('Hello there!')
}
 //setTimeout(sayHi, 1000)

//let time= setInterval(()=>{console.log("what's up!")}, 1000)

//clearTimeout(time)

// let timerId = setTimeout(function tick() {
//     console.log('tick');
//     timerId = setTimeout(tick, 2000); // (*)
//   }, 2000);

//Nested setTimeout allows to set the delay between the executions more precisely than setInterval.
//The nested setTimeout guarantees the fixed delay (here 100ms).
//The real delay between func calls for setInterval is less than in the code!=> fun declaration may be delayed than the setInt

//Zero delay setTimeout
//There’s a special use case: setTimeout(func, 0), or just setTimeout(func).

//console.log(Date.now())

/*Summary
- Methods setTimeout(func, delay, ...args) and setInterval(func, delay, ...args) allow us to run the func once/regularly after delay milliseconds.
- To cancel the execution, we should call clearTimeout/clearInterval with the value returned by setTimeout/setInterval.
- Nested setTimeout calls are a more flexible alternative to setInterval, allowing us to set the time between executions more precisely.
- Zero delay scheduling with setTimeout(func, 0) (the same as setTimeout(func)) is used to schedule the call “as soon as possible, but after the current script is complete”.
- The browser limits the minimal delay for five or more nested calls of setTimeout or for setInterval (after 5th call) to 4ms. That’s for historical reasons.

*/