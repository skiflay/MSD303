function myArr(arr, fun){
    let newA=[];
    for(let el of arr){
        newA.push(fun(el))
    }
    return newA;
}

//console.log(myArr([1,2,3]))
let x = new Date()
console.log(typeof x)