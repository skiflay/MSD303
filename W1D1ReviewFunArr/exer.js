"use strict";
module.exports = {executor, add, mult};

function executor(a,b, callBack){
    return callBack(a,b)
}

function add(a,b){
    return a+b;
}

function mult(a,b){
    return a*b;
}

console.log(executor(5,10, mult))

// sum the values of the matrix using indexed loops and then for of
// loops
let sum;
const matrix = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
for(let i=0; i<matrix.length; i++){
    for(let j=0; j<matrix[i].length; j++){  
    sum +=matrix[i][j]  
    }   
}
// let of array
let total=0;
for(let innerArr of matrix){
    for(let num of innerArr){
        total+= num
    }
}