console.log("Hello Worlld")

console.log("Hello")

document.body

document.body.childNodes
// NodeList(8) [text, div.container, text, script, text, div#sqrx-content-container, veepn-lock-screen, veepn-guard-alert]0: text1: div.container2: text3: script4: text5: div#sqrx-content-container6: veepn-lock-screen7: veepn-guard-alertlength: 8[[Prototype]]: NodeList

document.body.childNodes[1]
document.body.childNodes[1].childNodes
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

let cont = document.body.childNodes[1]
// undefined

cont.firstChild
// #text

cont.lastChild
// #text

cont.lastElementChild
{/* <div class=​"box">​Box5 ​</div>​ */}

cont.firstElementChild
{/* <div class=​"box">​Box1​</div>​ */}

cont.firstElementChild.style.backgroundColor="red"
// 'red'

cont.firstElementChild.parentElement
{/* <div class=​"container">​…​</div>​ */}

document.body.firstElementChild
{/* <div class=​"container">​…​</div>​ */}

document.body.firstElementChild.childNodes
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]


document.body.firstElementChild
{/* <div class=​"container">​…​</div>​ */}

document.body.firstElementChild.childNodes
// NodeList(13) [text, comment, text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

document.body.firstElementChild.children
// HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]

document.body.firstElementChild.childNodes
// NodeList(13) [text, comment, text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

document.body.firstElementChild.children
// HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]

document.body.firstElementChild.children[0]
{/* <div class=​"box" style=​"background-color:​ red;​">​Box1​</div>​ */}

document.body.firstElementChild.children[1]
{/* <div class=​"box">​Box2​</div>​ */}

document.body.firstElementChild.children[4]
{/* <div class=​"box">​Box5 ​</div>​ */}

document.body.firstElementChild.children[6]
// undefined

document.body.firstElementChild.children[3].nextElementSibling
{/* <div class=​"box">​Box5 ​</div>​ */}

document.body.firstElementChild.children[3].previousElementSibling
{/* <div class=​"box">​Box3​</div>​ */}

document.body.firstElementChild.children[3].previousSibling
// #text