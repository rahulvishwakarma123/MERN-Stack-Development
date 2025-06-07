let url = "http://universities.hipolabs.com/search?name=";

let inputCountry = document.querySelector("#country")
let inputState = document.querySelector("#state")
let button = document.querySelector("button")
let list = document.querySelector("#list")



async function getCollage(country) {
    try {
        let res = await axios.get(url + country)
        return res.data;
    }
    catch (err) {
        console.log(`error 2 ${err}`)
    }
}

button.addEventListener("click", async () => {
    list.innerHTML = ""
    let country = inputCountry.value
    try {
        let dataArr = await getCollage(country)
        // console.log(data)
        for(objects of dataArr){
            let keys = Object.keys(objects)
            const secondKey = keys[1]
            const secondValue = objects[secondKey]
            if(secondValue == inputState.value){
                let item = document.createElement("li")
                item.innerText = objects.name;
                list.append(item)
            }else if(inputState.value == ""){
                let item = document.createElement("li")
                item.innerText = objects.name;
                list.append(item)

            }
        }
    }
    catch (err) {
        console.log(`error 1 ${err}`)
    }
})



// name:"Atharva College of Engineering"
// state - province:"Mumbai"