"use strict";


// assessing length of an Obj
//Object.keys(gradeReport).length


let calculator = {
    value1: 0,
    value2: 0,
    getValues: function(opr1, opr2){
         this.value1 = opr1,
         this.value2= opr2
    },
    sum: function(){
        const total = this.value1 + this.value2;
        return total;
    },
    mul: function(){
        const total= this.value1 * this.value2;
        return total;
    }
}

let str = 'simon';
console.log(str.toUpperCase())

function User(name){
    this.name= name;
    this.isAdmin = false;
}

let user = new User('Jack');
console.log(user)