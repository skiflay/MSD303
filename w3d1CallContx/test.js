"use strict";
function a() {
    console.log(this);
}
//a() 

const b = {
    dog: 'fido',
    log: function() {
    console.log(this); }
}
//console.log(this)     
//b.log()
//  let mylog = b.log
//  mylog();

function area(){
    console.log(this); 
    return this.side * this.side;
    }
    const square1 = {side: 5, area: area};
    //console.log(square1.area())
    


function foo() { console.log(this); }

const bob = {
log: function() {
console.log(this);
}
};
// console.log(this); // this generally is window object
// foo(); //foo() is called by global window object
//  let bab= bob.log();
//  console.log(bab)


const me = {
    first: 'Tina',
    last: 'Xing',
    getFullName: function() {
    return this.first + ' ' + this.last;
    }
    }
    const log = function(height, weight) { // ‘this’ refers to the invoker
    console.log(this.getFullName() + height + ' ' + weight);
    }
// log.bind(me, 7, 8)() 
// log.call(me, 7,8)
// log.apply(me, [7,8])


