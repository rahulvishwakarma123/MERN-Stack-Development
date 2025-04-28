let gameSeq = [];
let userSeq = [];
let h2 = document.querySelector("h2")
let body = document.querySelector("body")
let btns = ["red", "green", "yellow", "blue"]
let level = 0;
let gameStarted = false;


document.addEventListener("keypress", function(e){
    if(!gameStarted){
        console.log("game started.")
        gameStarted = true;
    }

    levelUp();
})

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`
    let colorIdx = Math.floor(Math.random()*4)
    let colorClass = btns[colorIdx]
    let btn = document.querySelector(`.${colorClass}`)
    gameSeq.push(btn.getAttribute("id"))
    console.log(gameSeq)
    flashBtn(btn)
}

function flashBtn(btn){
    btn.classList.add("flash")
    setTimeout(() =>{
        btn.classList.remove("flash")
    },200)
}

function btnPress(){
    let btn = this;
    flashBtn(btn);
    let color = this.getAttribute("id")
    userSeq.push(color)
    console.log(userSeq)
    checkSeq(userSeq.length - 1);
}

function checkSeq(index){
    if(userSeq[index] == gameSeq[index]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        gameOver();
        h2.innerHTML = `Game Over! Your score was <b>${level}</b>.<br> Press any key to start.`
        reset();
    }

}

let allbtns = document.querySelectorAll(".btn")
for(btn of allbtns){
    btn.addEventListener("click", btnPress);
}

function gameOver(){
    body.classList.add("gameOver")
    setTimeout(()=>{
        body.classList.remove("gameOver")
    },50)
}

function reset(){
    gameSeq = [];
    userSeq = [];
    level = 0;
    gameStarted = false;
}

