// let btns = document.querySelectorAll('button');

// for (const btn of btns) {
//     // btn.onclick = sayBye;
//     // btn.onclick = sayHello;
//     btn.addEventListener("click", sayBye)
//     btn.addEventListener("click", sayHello)
// }

// function sayBye() {
//     alert("bye");
// }

// function sayHello() {
//     alert("Hello!");
// }

// ===========================================================================

// Math.floor(Math.random()*300)
// let btn = document.querySelector("button")
// let h1 = document.querySelector("h1")
// let div = document.querySelector("div")

// function randomColor(){
//     return Math.floor(Math.random()*255);
// }

// let red,green,blue;
// btn.addEventListener("click", () =>{
//     red = randomColor();
//     green = randomColor();
//     blue = randomColor();

//     h1.innerText = `rgb(${red},${green},${blue})`
//     div.style.backgroundColor = `rgb(${red},${green},${blue})`
// } )

// =============================================================
// let name = "";
// let input = document.querySelector("input")
// input.addEventListener("keypress", (e) =>{
//     console.log(e)
//     input.addEventListener("keypress.Enter", ())
// })

// ==============================================================

let form = document.querySelector("form")
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    // let input = document.querySelector("input")
    // console.log(input.value)
})

// ===================== input event & change event ================================

let input = document.querySelector("#username")
input.addEventListener("change", (e) =>{
    console.log(input.value)
})