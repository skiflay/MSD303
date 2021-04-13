"use strict";
// prototypal Inheritance  [[protype]]
// if Obj are created using Obj literal, use .__proto__:Parent Object // obj.__proto__ = parent Object

let person = {eat: true,
read: function(){console.log('reading')}
}

let student = {
    name: "student",
    study: function(){
        console.log('studing')
    },
    //__proto__: person
}
student.__proto__= person
// let student = Object.create(person)
console.log(student.eat)
console.log(person.__proto__===student)

// Function Constructor 
let Person1= {
    eat: true,
    read: function(){console.log("reading")}
}

function Student1(name){
    this.name = name
}
Student1.prototype = Person1
//Student1.__proto__= Person1
//Student1.prototype.age= 20;
Student1.prototype = {
    color: 'black',
    age: 20
}
let student2 = new Student1('simon')
console.log(student2.color)
//console.log(student1.Read())

// primitive data prototype = Object prototype

