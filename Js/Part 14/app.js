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


// =========================== Some random urls ================================================

// let url1 = "https://official-joke-api.appspot.com/random_joke";
// let url = "https://jokeapi.dev/";


// ============= sending headers OR configration with the request. ==========================

// let url = "https://icanhazdadjoke.com/";

// async function getJoke() {
//     let header = { headers: {
//         Accept : "application/json"
//     }}
//     try{
//         let res = await axios.get(url, header)
//         console.log(res)
//         console.log(res.data.joke)
//     }
//     catch(err) {
//         console.log(err)
//     }
// }
// getJoke()



// ============= Adding query strings in url. ==========================

// let url = "http://universities.hipolabs.com/search?country=";
// let country = "nepal"

// async function getCollages() {
//     try{
//         let res = await axios.get(url+country)
//         console.log(res.data.name)
//         console.log(res.data)
//     }
//     catch(err) {
//         console.log(err)
//     }
// }
// getCollages()