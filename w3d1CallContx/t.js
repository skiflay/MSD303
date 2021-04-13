"use strict";

function area(){
console.log(this);
console.log(this.side)
return this.side * this.side;
}
const square1 = {side: 5, area: area};
//console.log(area());
area.bind(square1)()
//console.log(square1.area())

// const y = {a:1, b:2, add: ()=> a+b}
// console.log(y.add)




