let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  function printList(list) {
    let tem = list;
    while (tem) {
      console.log(tem.value);
      tem = tem.next;
    }
  
  } 
  printList(list);

 //recursive 
 function printReverseList(list) {

    if (list.next) {
      printReverseList(list.next);
    }
  
    console.log(list.value);
  }
  
  printReverseList(list);

  //For loop
  function printReverseList(list) {
    let arr = [];
    let tmp = list;
  
    while (tmp) {
      arr.push(tmp.value);
      tmp = tmp.next;
    }
  
    for (let i = arr.length - 1; i >= 0; i--) {
      console.log( arr[i] );
    }
  }
  
  printReverseList(list);

  // No Overloading
  //Why? JavaScript ignores extra arguments and uses undefined for missing
    //arguments. Last declaration overwrites earlier ones.
  function log() {
    console.log("No Arguments");
    }
    function log(x) {
    console.log("1 Argument: " + x);
    }
    function log(x, y) {
    console.log("2 Arguments: " + x + ", " + y);
    }
    log();
    log(5);
    log(6, 7);

    //The arguments object is an Array-like object corresponding to the
    //arguments passed to a function.
    function findMax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
    max = arguments[i];
    }
    }
    return max;
    }
    const max1 = findMax(1, 123, 500, 115, 66, 88);
    const max2 = findMax(3, 6, 8);
    
    /*rest parameters are only the ones that haven't been given a separate name,
    while the arguments object contains all arguments passed to the function
    ➢ ES6 compatible code, then rest parameters should be preferred. */
    function sum(x, y, ...more) {
    //"more" is array of all extra passed params
    let total = x + y;
    if (more.length > 0) {
    for (let i = 0; i < more.length; i++) {
    total += more[i];
    }
    }
    console.log("Total: " + total);
    return total;
    }
    sum(5, 5, 5);
    sum(6, 6, 6, 6, 6);
    
    // Spread Operator
    //The same … notation can be used to unpack iterable elements (array, string, object)
    //rather than pack extra arguments into a function parameter. 
    let a, b, c, d, e;
a = [1,2,3];
b = "dog";
c = [42, "cat"];
// Using the concat method.
d = a.concat(b, c); // [1, 2, 3, “dog”, 42, “cat”]
// Using the spread operator.
e = [...a, b, ...c]; // [1, 2, 3, “dog”, 42, “cat”]
copyOfA = [...a] //[1, 2, 3]
let str = "Hello";
alert( [...str] ); // H,e,l,l,o

//make a (shallow) clone of an object
let a, b, c, d, e;
a = {a:1, b:2, c:3, d: 44}
b = {...a }
console.log(b) // {a:1, b:2, c:3, d: 44}
b.a = 100;
console.log(a) // {a:1, b:2, c:3, d: 44} -- clone
