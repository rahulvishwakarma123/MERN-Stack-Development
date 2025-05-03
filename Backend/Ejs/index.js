const express = require("express")
const app = express();
const path = require("path")
const port = 3000;

app.set("view engine", "ejs")
app.set("views", path.join(__dirname,"views"))

app.get('/',(req,res) =>{
    res.render("home")
})
app.get('/about', (req,res) =>{
    res.send("hello about.")
})
app.get('/rollDice', (req,res) =>{
    const followers = ["Rahul","Shiwangi","Aman","Golu"]
    let dice = Math.floor(Math.random() * 6) + 1;
    res.render("rollDice",{dice,followers})
})
app.listen(port,() =>{
    console.log(`App is listening on port ${port}`)
})