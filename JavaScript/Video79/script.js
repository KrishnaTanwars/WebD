let a  = prompt("1st number")
let b  = prompt("2nd number")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError ("Sorry this is not allowed")
}
let sum = parseInt(a) + parseInt(b)


main(){
    
    try {
        console.log("Sum is ",sum*x)
        return true
        
    } catch (error) {
        console.log("Error aagya bhai")
        return false
    }
    finally
    {
        console.log("Files are being closed")
    }
}

let c  = main()