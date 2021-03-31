/*forEach
The arr.forEach method allows you to run a function for every element of the array. forEach doesn’t return anything.
*/
const arr = [1,2,3]
arr.forEach(function(item, index, array){
  //... do something with item
})
// rewrite with function
const myForeach = function(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i], i, array)
    }
  }

  /*map
The map function always returns the new array with the same length as the original.
arr[1,2,3] ======>Map ==>item=>item+1 ====> arr[2,3,4]
  */
Array.prototype.myMap = function(callback) {
    let newArray = []
    for (let i = 0; i < this.length; i++) {
      let newMappedItem = callback(this[i], i, this)
      newArray.push(newMappedItem)
    }
    return newArray
  }

  /*find
The find function returns the first item that matches the callback function, 
or undefined if there is nothing that matches.
arr[1,2,3] ======>find ==>item=>item<3 ====> 1
  */
Array.prototype.myFind = function(callback){
    let result
    for (let i = 0; i < this.length; i++) {
      let isFound = callback(this[i], i, this)
      if(isFound){
        result = this[i]
        break //stop the loop if find that item
      }
    }
    return result
  }

  /*filter
This works like the find function, but instead of returning the first matched item, 
filter will return the array of matched items or an empty array if nothing matched.
arr[1,2,3] ======>filter ==>item=>item<3 ====> 1,2
  */

/*reduce
Instead of returning an array, such as map or filter, reduce returns any value we want. 
We only need to pass the initial value, then modify it over each iterator.
arr[1,2,3] ======>reduce ==>(result, item)=>result + item ====> 6
*/
Array.prototype.myReduce = function(callback, initialValue){
    for (let i = 0; i < this.length; i++) {
      initialValue = callback(initialValue, this[i], i, this)
    }
    return initialValue
  }

  //recursion to count the instances of a letter in a string
  function count(str, letter){
      let n =0
      if(str === ""){
          return 0
      } else {
        return  1+ count(str.substr(1), letter)  
      }  
  }
  console.log(count('abcabc', 'a'))

