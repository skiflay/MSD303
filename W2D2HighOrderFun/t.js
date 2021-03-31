"use strict";
const arr = [1,2,3,4,5];
function myMap(arr, cbk){
    //IMPLEMENTATION NEEDED
    let newArr = [];
    for(let n of arr){
        let ele = cbk(n);
        newArr.push(ele);
    }
    return newArr;
    }
    
    const dblFun = num => num * 2;
    const squareFun = num => num * num;
    
    console.log("expect [2, 4, 6,8,10] ", arr.map(dblFun));
    console.log("expect [2, 4, 6,8,10] ", myMap(arr, dblFun));