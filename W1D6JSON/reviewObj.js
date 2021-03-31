//1. In what sense is an object like a cabinet of files?
// they both store data by reference 
//2. How are primitives different from objects?
// Primitive assign data by value vs Objects by reference 
//3. Give an example of creating an object using an object literal?
//4. What does it mean that object properties can be dynamically created and deleted?
//5. What are dot and square bracket notations for objects? Which of these allow for computed
//properties? Give an example.
//6. How can you check for the existence of a property using ===? Why will that fail if undefined is
// assigned as the value of a property? What do JS programmers normally assign to a variable with
// no value?
//7. How does for .. in differ from for .. of ? 
// for..in =>Obj  ||for..of   = looing in array, string, node ...
//8. What does it mean for an object to be stored and copied by reference? How does that differ from primitives?
// – are assigned/copied “as a whole value” vs “address in memory”, in other words “a reference” to it.
//9. Are objects always equal if they have the same properties and same values for their properties? Explain.
//10. Can const variables be changed after assignment? Can const objects be changed after assignment?
//13. What is a method? How is it related to a function?
// method is a function with in an obj, but function is not a method // both do something 
//15. What is ‘this’ in an object? When is it used?
// this is reference to an Obj. whenever we need to access the value of the obj

//16. What is the value of this if called in a function that is not a method?
// it will call the global this i.e window
// this ==> global ==Windiw  function === this ==undefined method== this ==value 
//17. What is a constructor function? How does it relate to an object literal?
// is blue print for creating an Obj
// function Car(engine, body, tires){
//     this.engine = engine
//     this.body = body
//     this.tires = tires
// }
// let toyota = new Car('bmw', 'red', 'black')
// console.log(toyota)
//18. What does the operator ‘new’ do when called with a constructor function?
// new {} created, assign to this & fun body executes & returned 
//19. What happens if you forget to use ‘new’ when calling a constructor function?
//20. Why are constructor functions capitalized? What happens if they are not capitalized?
// it's convention but it's way of differenating with function. It still works



 

