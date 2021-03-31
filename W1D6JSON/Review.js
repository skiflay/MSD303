// 1. What are the different data types in JavaScript?
// primitives: string, number, boolean, undefined, null, bigInt, symbol
// complex: object: structure data in keys & value & array structure data in elements and function 

//2. Why is the typeof operator more important in a loosely typed language like JavaScript than a
//strongly typed language like Java or C#?  
//Java or C# ... we have to declare the data type and can't change it
//JS ... we don't declare datatype (given @ runtime) and we can assign d/t datatypes to 1 variable

//4. How do you convert strings to numbers and numbers to strings?
//string to number => parseInt(var) || parseFloat(var) || Number(var) || +var
// number to string => var.toString() || var + ""

//5. How can JavaScript primitives have methods associated with them (e.g. “hello”.toUpperCase() )
//if they are not objects?
// special object is created that knows the value of string and then destroyed once it was created 
// primitive data can create methods but still remain light weighted 

//6. Why are parseInt and parseFloat important for a web application?
// bcz whenever the client enters an input, it always string so these methods will help us to covert to numbers

//7. Give a common JavaScript programming idiom for converting a number to a string.
// CSS ... 80px

//8. Is 108 === “108” is 108 == “108”? Explain the difference
// false vs true === strict == && ==

//9. Is slice the same method when used with an array versus a string? Explain
// yes, it keeps the original & not destructive method

//11. What is a destructive versus non-destructive array operation?
// destructive changes the original vs not splice vs slice

//12. How is forEach related to for .. of ?
// they both iterate via elements

//13. Why are find, filter, map, reduce considered ‘higher order’ functions? Why are they considered
// “pure” functions?
// non-destructive & no side effect

// 14. Map return new array vs filter ==> filter & returns elements of array
                /*var agesArr = [25, 36, 49, 64, 81];
                let x= agesArr.find((ele, i)=>{
                    return ele>40
                })

                console.log(x) */

// 14. What is the accumulator in reduce? 
// The first arguement & it's initial value if it's given //  arr.reduce((acc, ele)=>{ }, 0)

//15. Why do we recommend using an initial value for reduce?
// it's a good practice and we know where to start it and for clarity

// Notes with codes
//1. toUpperCase
// Better to us str.charAt() for checking empty str or use if clause to check it before using str(0)
// let str = '';
// console.log(str.charAt(0).toUpperCase()+ str.slice(1))

//2. checkSpam
// function checkSpam(str) {
//     let lowerStr = str.toLowerCase();
//     return lowerStr.includes('viagra') || lowerStr.includes('xxx');
//   }

//3. shuffle an array with an equal probability
// function shuffle(array) {
//    return array.sort(() => Math.random() - 0.5);
//   }
//   let arr = [1, 2, 3];
//  console.log(shuffle(arr));

//4. Get average age of in an obj
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];
// function getAverageAge(users) {
//     return users.reduce((prev, user) => prev + user.age, 0) / users.length;
//   }

// 5. find unique array members
// let arr = ['simo','kis', 'ab', 'ab','kis', 'simo']
// function unique(arr){
// let res=[];
// for(let str of arr){
//     if(!res.includes(str)) 
//     res.push(str)
// }
// return res;    
// }
// console.log(unique(arr))

 