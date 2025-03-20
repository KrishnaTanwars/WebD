function nice(name){
    console.log("Hey " + name + " you are nice");
    console.log("Hey " + name + " you are good");
    console.log("Hey " + name + " you are beautiful");
    console.log("Hey " + name + " you are handsome");
}

// nice("Krishna")
// nice("Aditya")

// function sum(a,b,c=12){
//     // console.log(a+b);
//     console.log(a,b,c)
//     return a + b+c;
// }
// result = sum(5,8)
// result1 = sum(5,8,10)
// result2 = sum(5)
// console.log("Sum is "+result)
// console.log("Sum is "+result1)
// console.log("Sum is "+result2)

const func = (x) =>{
    console.log("Arrow Function",x)
}

func(10)