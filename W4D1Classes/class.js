//squares have property, side, and method, area. The area method should be shared by all square objects

class Square {
    constructor(side){
        this.side = side;
    }
    area(){return this.side * this.side}
}
const sq1 = new Square(5)
console.log(sq1.area())

// prototype

let animal = {
    eats: true,
    walk: function() {
    console.log("Animal walk");
    }
    };
    let rabbit = {
    jumps: true,
    //__proto__: animal
    };
    rabbit.__proto__=animal
    console.log(rabbit.walk())
