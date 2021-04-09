"use strict";

// What is context stack vs call stack vs lexical environment and their r/ship?
/*context stack and call stack are, "essentially", the same thing. 
The call stack holds the execution contexts for the function calls. 
It is a stack of execution contexts. Every function call has its execution context
--the local variables and a reference to it's lexical environment and 
some record of the line of code it is currently executing (in case there is a function call).
*/


function a() {
    console.log(this);
}
//a()
// in strict mode = will get undefined, but in non-strict mode it's global object

const b = {
    dog: 'fido',
    log: function() {
    console.log(this); }
}
console.log(this)     
b.log()
let mylog = b.log
mylog();

/* sloppy	global
global	global
global 	undefined
b	b ==> bcz method
global undefined  ==> bcz function
*/

//Solution 1: a wrapper === to this problem inside timeout
let user = {
    firstName: "John",
    sayHi() {
    console.log(`Hello, ${this.firstName}!`);
    }};
    setTimeout(function() { user.sayHi(); }, 1000); 

    const me = {
        first: 'Tina',
        last: 'Xing',
        getFullName: function() {
        return this.first + ' ' + this.last;
        }
        }
        let log = function(height, weight) { // ‘this’ refers to the invoker
        console.log(this.getFullName() + height + ' ' + weight);
        }
        log = log.bind(me); // const logMe = log.bind(me);
        log('180cm', '70kg') // logMe('180cm‘, '70kg'); 

        function area(){
            console.log(this); 
            return this.side * this.side;
            }
            const square1 = {side: 5, area: area};
            consosle.log(square1.area())
        /*sloppy		strict
        square1		square1
        25		25
        global		undefined
        undefined	error
        NaN	
        */