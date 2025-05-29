const express = require("express")
var methodOverride = require('method-override')
const app = express();
const { v4: uuidv4 } = require('uuid');
const path = require("path")
const port = 3000;
let allTasks = require("./main")

app.use(methodOverride('_method'))

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))

app.use(express.static(path.join(__dirname, "public")))

app.use(express.urlencoded({extended:true}))
// app.use(express.json())

app.get("/lists",(req,res) =>{
    res.render("index.ejs",{allTasks})
})

app.post("/add",(req,res) =>{
    let {input} = req.body;
    if(input == ""){
        res.redirect("/lists")
    }else{
        let newTask = {
            // id: Date.now().toString(), // Generate unique ID
            id:uuidv4(),
            task: input
        };
        allTasks.push(newTask);
        res.redirect("/lists");
    }
})
app.patch("/lists/:id",(req,res) =>{
    let {id} = req.params
    let task = allTasks.find((p) => id === p.id);
    res.render("edit.ejs", {task})
})
app.post("/lists/:id",(req,res) =>{
    let {id} = req.params
    let {input} = req.body
    let task = allTasks.find((p) => id === p.id);
    task.task = input
    res.redirect("/lists")
})

app.delete("/lists/:id", (req,res) =>{
    let {id} = req.params
    allTasks = allTasks.filter((p) => id !== p.id)
    res.redirect("/lists")
})

app.listen(port,() =>{
    console.log("App is running on port",port)
})