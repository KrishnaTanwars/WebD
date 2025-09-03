let arr = [1,4,5,6,556]
// let newarr= []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)
// }

let newarr = arr.map((e,index,array)=> {return e**2})
console.log(newarr)

const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    else{
        return false
    }
}
console.log(arr.filter(greaterThanSeven))

let arr2 = [1,2,3,4,5]
const red = (a,b)=>{
    return a*b

}

console.log(arr2.reduce(red))

console.log(Array.from("Krishna"))