// console.log("harry")
// console.log("KRISHN")


// setTimeout(() => {
//     console.log("Hi this is krishn")

// }, 0);
// setTimeout(() => {
//     console.log("Hi this ")

// }, 0);
// console.log("The end")

const fn = () =>{
    console.log(arg)
    fn()
} 

const Callback = (arg,fn) => {
    console.log(arg)
}

const loadScript = (src, Callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = Callback("Krishna");
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",Callback)
// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",(arg,fn) => {
//     console.log(arg)
//     fn("firstarg",()=>{
//         ddg("secondargs",()=>{
            
//         })
//     })
// })