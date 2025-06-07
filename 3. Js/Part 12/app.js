// =============================== Call Stack =======================

// function one(){
//     return 1;
// }
// function two(){
//     return one() + one();
// }
// function three(){
//     let ans = two() + one();
//     console.log(ans)
// }

// three()

// =============================== Callback Hell ===========================

// let heading = document.querySelector("h1")

// function changeColor(color,delay){
//     setTimeout(() =>{
//         heading.style.color = color;
//     },delay)
// }
// setTimeout(() =>{
//     heading.style.color = "red";
// }, 1000)
// setTimeout(() =>{
//     heading.style.color = "orange";
// }, 2000)
// setTimeout(() =>{
//     heading.style.color = "yellow";
// }, 3000)


// changeColor("red", 1000)
// changeColor("orange", 2000)
// changeColor("green", 3000)

// ------------------------------------------

// function changeColor(color,delay,nextColor){
//     setTimeout(() =>{
//         heading.style.color = color;
//         if(nextColor)nextColor();
//     },delay)
// }
// ------> Callback nesting --> Callback Hell <------------------
// changeColor("red", 1000, () =>{
//     changeColor("orange", 1000, () =>{
//         changeColor("green", 1000, () =>{
//             changeColor("yellow", 1000, () =>{
//                 changeColor("pink", 1000, () =>{
//                     changeColor("cyan", 1000)
//                 })
//             })
//         })
//     })
// })



// ================================ Pormises ===============================


// function saveToDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10);
//     if (internetSpeed < 4) {
//         success(data);
//     } else {
//         failure();
//     }
// }

// saveToDb("Rahul Vishwakarma", (data) => {
//     console.log("your data was saved.", data)
//     saveToDb("Shradha Khapra", (data) => {
//         console.log("your data2 was saved.", data)
//         saveToDb("Tripathi ji", (data) => {
//             console.log("your data3 was saved.", data)
//         }, () => {
//             console.log(`Your internet is too slow! Data3 is not saved.`)
//         })
//     }, () => {
//         console.log(`Your internet is too slow! Data2 is not saved.`)
//     })
// }, () => {
//     console.log(`Your internet is too slow! Data is not saved.`)
// })

// -------------------- Writting the upper code with help of promises ------------------------>

// function saveToDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10);
//         if (internetSpeed < 6) {
//             resolve("Your promise resolved.");
//         } else {
//             reject("Request was rejected.");
//         }
//     })
// }

// let request = saveToDb("Rahul Vishwakarma");

// request.then(() => {
//     console.log("Promise was resolved")
//     // console.log(resolve)
// })
// .catch(() =>{
//     console.log("Promise was rejected.")
//     // console.log(reject)
// })

// -------------- Chaining Promises ------------->

// saveToDb("Data 1").then(() => {
//     console.log("data 1 was saved.")
//     return saveToDb("Data 2")
// }).then(() => {
//     console.log("data 2 was saved.")
//     return saveToDb("Data 3")
// }).then(() => {
//     console.log("data 3 was saved.")
//     return saveToDb("Data 3")
// }).then(() => {
//     console.log("data 4 was saved.")
// })
// .catch(() => {
//     console.log("Internet speed is too slow! data was not saved.")
// })

// ============ Resolving the problem of callback hell of the code of color changing of heading. =================>

heading = document.querySelector("h1")

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            heading.style.color = color;
            resolve("Color was changed.")
        }, delay)
    })
}


changeColor("red", 1000)
    .then(() => {
        console.log("heading is now red color.");
        return changeColor("orange", 1000);
    })
    .then(() => {
        console.log("heading is now orange color.");
        return changeColor("green", 1000);
    })
    .then(() => {
        console.log("heading is now green color.");
        return changeColor("blue", 1000);
    })
    .then(() => {
        console.log("heading is now blue color.");
        return changeColor("yellow", 1000);
    })
    .then(() => {
        console.log("heading is now yellow color.");
        return changeColor("black", 1000);
    })
    .then(() => {
        console.log("heading is now black color.");
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });

// let request = changeColor("red", 2000);
// request.then(() => { changeColor("orange", 1000) }).then(() => { changeColor("blue", 1000) })