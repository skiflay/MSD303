"use strict";
const prompt = require("prompt-sync")();


// string ... looping, n exit => return first num
// let user;
// let user2;
// do{
// user = +prompt("enter a number ")
// user2 = +prompt("enter a number ")
// } while(isNaN(user)) 
// let sum = user +user2
// sum = sum +'';
// let fistEl = sum.charAt(2)
// console.log(fistEl);
// //arr.find(n=> console.log(n) )

// console.log(23.6647.toFixed(4))


// // parseInt === int
// // Number === '2.5'== 2.5
// let n= '25.235px' // 
// // console.log(parseInt(n)) //25
// // console.log(parseFloat(n)) //25.0
// // console.log(Number(n)) // nan
// // console.log(+n)

// // forEach, filter, find, findIndex, lastIndexOf 
// // take function as parameter 


// let a = [1,2,3,4,8]
// a.find(function(n){ //do something ...callback fun
// if(n%2!==0){
//     console.log(n)
// }
// })


// a.findIndex((a, i)=>{
//     console.log(i>2)
// })

// let str= '123'
// console.log(str.charAt(0))

// console.log( 1.35.toFixed(20) ); // 1.4
// console.log( 6.356.toFixed(20) ); // 6.4

//random 1-5 ... 0.1- 0.9
//return min + Math.random() * (max - min);
console.log((Math.floor(Math.random()*5))+1) 
console.log(1+Math.random()*(5-1))
