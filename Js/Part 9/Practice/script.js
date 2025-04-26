// Creating a paragraph element to the document.

let body = document.querySelector('body')
let para = document.createElement('p')
para.innerHTML = "Hey, I am red."
para.style.color = 'red'
body.append(para);

// Creating a h3 heading to the document.

let h3 = document.createElement('h3')
h3.innerText = "I am blue, h3."
h3.style.color = "blue"
body.append(h3)

// Inserting a div with black border and pink background.
let div = document.createElement("div")
div.style.border = "2px solid black"
div.style.backgroundColor = "pink"
body.append(div)

let h1 = document.createElement('h1')
let divPara = document.createElement('p')
h1.innerText = "Hii, I am in div."
divPara.innerText = "ME TOO."
div.appendChild(h1)
div.appendChild(divPara)

