// Create a faulty calculator using JS

// This faulty calculator does the following:
// 1. It takes two numbers as input from the user
// 2. It performs wrong operations as follows:

// + --> -
// * --> +
// - --> /
// / --> **

// It performs wrong operation 10% of the times

let random = Math.random()
console.log(random)
let a = prompt("Enter first number: ")
let c = prompt("Enter Operation: ")
let b = prompt("Enter second number: ")

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

if(random>0.1){
    // PERFORM CORRECT CALCULATION
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    
}

else{
    // PERFORM WRONG CALCULATION
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}