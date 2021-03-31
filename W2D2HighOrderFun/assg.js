"use strict";
//map function
const arr = [1,2,3];
 function myMap(arr, fun){
    let newArr=[];
    for(let ele of arr){
        let dblEl= fun(ele*2)
        newArr.push(dblEl)
    }
    return newArr
}
//filter function 
function myFilter(arr, callback){
    let newArr= [];
    for(let ele of arr){
        let newEle = callback(ele)
        if(ele){
            newArr.push(newEle)
        }   
    }
    return newArr
}

//reduce function 
function myReduce(arr, fun){
    for(let i=0; i<arr.length; i++){
        let add = fun(sum, arr[i])

    }
}

function pow(x, n){
    if (n == 1) { return x; } else { return x * pow(x, n - 1); } }

    console.log(pow(2,3))