"use strict";

const Manager = {
    name: "John",
    age: 27,
    job: "Software Engineer"
  };
  const Intern= {
    name: "Ben",
    age: 21,
    job: "Software Engineer Intern"
  };
  
  /**
   * @returns {undefined} 
   */
  function sayHi(name, age, job) {
     //IMPLEMENT THIS
    console.log(`Hello, my name is ${this.name}. I am ${this.age}. My job is ${this.job}.`)
  }
  
  // add sayHi function to both objects
  Manager.sayHi = sayHi;
  Intern.sayHi = sayHi;
  
  Manager.sayHi(); // Hello, my name is John. I am 27.  My job is Software Engineer.'
  Intern.sayHi(); // Hello, my name is Ben.  I am 21.  My job is Software Engineer Intern.'

  // list node
  /*
list = {value:1, next: node3} // first
node2 ={value:2, next: null}  // the last
node3 ={value:3, next: node2} // the middle
  */