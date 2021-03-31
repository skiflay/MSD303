function Calculator(){
    this.plus= function (a,b){return a+b;};
    this.minus=(a,b)=> a-b;
    this.changeToNum =str=>{
        str = +str;// Number
        if(str===isNaN){
            return NaN
        }
        return str 
    }
    
}
const cal = new Calculator();
//console.log(cal.plus(2,3))

// desctruring Objects
const team = { point: "Bob", shooting: "Fred", power: "Jim", small: "Al", center: "Big Sleep" }
const {point, shooting, power, small, canter}= team
//console.log(point)

// JSON
// console.log(JSON.stringfy('simon'));
// console.log(JSON.parse("simon"))

let text = '42.93mm2';
let integer = parseInt(text);
//console.log(integer)
let num = 4.23
let c = num.toFixed(3)

// console.log(c)
let str = 'Widget with id';
//console.log(str.indexOf('i'))

//Object.keys(obj) – returns an array of keys.
//Object.values(obj) – returns an array of values.
//Object.entries(obj) – returns an array of [key, value] pairs.
let user = {
    name: "John",
    age: 30
  };
  for(let val of Object.entries(user)){
      for(let va of val){
        //console.log(va)
      }
  }
  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  /*
slice(start, end)	from start to end (not including end)	allows negatives
substring(start, end)	between start and end	negative values mean 0
substr(start, length)	from start get length characters	allows negative start
  */
 let eg = "The brown fox has jumped over the lazy dog"
 