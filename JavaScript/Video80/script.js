// let obj = {
//     a : 1,
//     b : "Krishna"
// }

// console.log(obj)

// let animal = {
//     eats : true
// };

// let rabbit = {
//     jump:true
// };

// rabbit.__proto__ = animal;
// console.log(rabbit)


class Animal{
    constructor(name){
        this.name = name
        console.log("Object is created...")
    }
    eats(){
        console.log("kha rha hoon")
    }
    jump(){
        console.log("kood rha hoon")
    }
}


class Lion extends Animal{
    constructor(name){
        super(name)
        console.log("obj is created and he is a lion...")
    }
    eats(){
        super.eats()
        console.log("kha rha hoon roar")
    }
    
}
let a = new Animal("Bunny")
console.log(a)

let b = new Lion("Shera")
console.log(b)