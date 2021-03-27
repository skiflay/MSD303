"use strict";
//Filter
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
    ];
 let filtered = users.filter(item=>{
     return item.id>1
 }) 
 console.log(filtered)
 //map
 let arr = ["Bilbo", "Gandalf", "Nazgul"];
 let result = arr.map(function(item, index, array) {
    // returns the new value instead of item
    return `${index}: ${item.length}`;
    });
    console.log(result)
//sort
let a = [ 1, 2, 15 ];
console.log(a.sort((a,b)=>b-a))

// Sort lexicographic descending order // 2,15,1
console.log(a.sort((a,b)=>{
    a = ''+ a;// changing to string
    b = ''+ b;
    return b-a
}))
//reduce - calculate single value on the array
//arr.reduce((prevValue, item, index, array)=>{},[initial])
let arry = [1, 2, 3, 4, 5];
let prod = arry.reduce((preValue, item)=>{
    console.log(preValue, item)
    return preValue*= item;
},1)
console.log(prod)
//reduce the array to the max of the numbers (“expect 5”)
let maxArr = arry.reduce((max, curr)=>{
    return Math.max(max, curr);
},-Infinity)
//console.log(maxArr)

// arr.reduce(prevValue, ele), 0)