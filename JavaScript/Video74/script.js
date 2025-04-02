let button = document.getElementById("btn")

// LIST OF ALL MOUSE EVENTS
//https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
button.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML="<b>Yay you were clicked</b> Enjoy"
})
button.addEventListener("keydown",(e)=>{
    console.log(e,e.key,e.keyCode)
    document.querySelector(".box").innerHTML=e.key
})