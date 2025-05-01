// ================= Syntax of Async functions ===================

// async function greet() {
//     throw "weak connection."
//     return "Hello";
// }

// console.log(greet());

// greet().then((result) =>{
//     console.log(`your result was ${result}.`)
// })
// .catch((err) => {
//     console.log(`The problem of the code is ${err}.`)
// })

// ===================== Syntax of async arrow funtion =================>
// let AsyncFunc = async () =>{
//     return 4;
// }


// ===================== Async and Await ==========================

// ---------> Example 1 <----------------

// function getNum() {
//     return new Promise((res,rej) => {
//         setTimeout(() =>{
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             res();
//         }, 1000)
//     })
// }

// async function runner() {
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
// }

// runner();



// ---------> Example 2 <----------------

// let heading = document.querySelector("h1")

// function colorChange(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             if(num < 3){ // making custome error for error handling.
//                 reject("Promise rejected.")
//             }
//             heading.style.color = color;
//             resolve();
//         }, delay)
//     })
// }

// async function runner1() {
//     try{
//         await colorChange("red", 1000).then(() => {
//             console.log("heading is now red color.")
//         });
//         await colorChange("orange", 1000).then(() => {
//             console.log("heading is now orange color.")
//         });
//         await colorChange("blue", 1000).then(() => {
//             console.log("heading is now blue color.")
//         });
//         await colorChange("green", 1000).then(() => {
//             console.log("heading is now green color.")
//         });
//         await colorChange("yellow", 1000).then(() => {
//             console.log("heading is now yellow color.")
//         });
//     }
//     catch(error){
//         console.log(`Some error occured. ${error}`)
//     }
//     return "done";

// }

// console.log(runner1())












// ============================================= API Requests =========================================

// let url = "https://catfact.ninja/fact"

// let request = fetch(url) // It returns us promise

// request.then((response) => {
//     console.log(response)
//     // console.log(response.json());
//     return response.json()
//     })
//     .then((data) => {
//         console.log("data 1 = ",data.fact);
//         return fetch(url);
//     })
//     .then((response) =>{
//         response.json().then((data) =>{
//             console.log("data 2 = ",data.fact)
//         })
//     })
//     .catch((err) => {
//         console.log(`ERROR -> ${err}`)
//     })

// ===================== API calls with help of Async and await =====================================


// let url = "https://catfact.ninja/fact"

// async function getFact() {
//     try{
//         let res = await fetch(url)
//         let data = await res.json();
//         console.log(data.fact)
//     }catch(err) {
//         console.log(`Error -> ${err}`)
//     }
// }
// getFact();



// ====================== Making get requests with help of Axios ==========================


// let url = "https://catfact.ninja/fact"

// async function getFact() {
    //     try{
        //         let res = await axios.get(url)
        //         console.log(res.data.fact)
//     }catch(err) {
    //         console.log(`Error -> ${err}`)
//     }
// }
// getFact();




// ====================== Printing cat facts on page besides the console. ==========================

// let url = "https://catfact.ninja/fact";
// let button = document.querySelector("button")


// async function getFact() {
//     try{
//         let res = await axios.get(url)
//         return res.data.fact;
//     }
//     catch(err){
//         console.log(err)
//         return "NO FACT FOUND."
//     }
// }

// -----> First way to show text in the para.
// button.addEventListener("click", () =>{
    // let para = document.querySelector("#fact")
//     let text = getFact()
//     text.then((data) => {
//         para.innerHTML = data
//     })
// })

// --------> Seciond way to show text in the para.
// button.addEventListener("click", async () =>{
//     let para = document.querySelector("#fact")
//     try{
//         let text = await getFact()
//         para.innerHTML = text;
//     }catch(e){
//         console.log(e)
//         para.innerHTML = "Fact not found. Please check your internet connection.";

//     }
// })