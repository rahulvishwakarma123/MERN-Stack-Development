let input = document.querySelector("input")
let button = document.querySelector("button")
let ul = document.querySelector("ul")
button.addEventListener("click",(e) =>{
    let li = document.createElement("li")
    let delBtn = document.createElement("button")
    
    li.innerText = input.value
    ul.append(li)
    delBtn.innerText = "Delete"
    delBtn.classList.add("delete")
    li.appendChild(delBtn)
})

// let deleteBtns = document.querySelectorAll(".delete")
// for(btn of deleteBtns){
//     btn.addEventListener("click", function() {
//         console.log("abcv")
//         let par = this.parentElement;
//         console.log(par)
//     })
// }   => This code is not working for newly added elements it only works for pre-existing elements.


// =============== Event delegation ==================
ul.addEventListener("click", function(e) {
    if (e.target.classList.contains("delete")) {
        let par = e.target.parentElement;
        par.remove(); // Optionally remove the list item
    }
});