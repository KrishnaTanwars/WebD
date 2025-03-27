console.log("Hello")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// // boxes[1].style.backgroundColor = "red";

// document.getElementById("red").style.backgroundColor="red"

// document.querySelector(".box").style.backgroundColor="Green"

// console.log(document.querySelectorAll(".box"))

// document.querySelectorAll(".box").forEach(e=>{
//     console.log(e)
//     e.style.backgroundColor="red"
// })

e = document.getElementsByTagName("div")
e[3].matches("#redbox")
e[4].matches("#redbox")

console.log(e[3].closest(".container"))
console.log(e[3].closest("html"))

console.log(document.querySelector(".container").contains(e[2]))
console.log(document.querySelector(".container").contains(e[3]))


console.log(document.querySelector(".container").contains(document.querySelector("body")))
console.log(document.querySelector(".container").contains(document.querySelector(".container")))
console.log(document.querySelector("body").contains(document.querySelector(".container")))