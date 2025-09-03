// async function getData(){
//     //Simulate getting data from a server
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(455)},3500);
//     })

// }

// SETTLE means resolve or reject
// RESOLVE means promise has settled successfully
// REJECT means promise has not settled successfully

async function getData(){
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.text()
      console.log(data)
      return 2
    }

async function main(){
    
    console.log("Loading Modules")
    console.log("Do something else")
    console.log("Load data")
    let data = await getData()
    console.log(data)
    console.log("Process data")
    console.log("tas2")
}

main()

// Example POST method implementation
async function postData(url="",data = {}){
    const reponse = await fetch(url,{
        method:"POST",
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify(data),
    })
    return response.json()
}

postData("https://example.com/answer",{answer:42}).then((data)=>{
    console.log(data)
})
// data.then((v)=>{

//     console.log(data)
//     console.log("Process data")
//     console.log("tas2")
// })