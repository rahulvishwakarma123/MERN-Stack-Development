const express = require("express")
const app = express();
const { v4: uuidv4 } = require('uuid');
const path = require("path")
const port = 3000;
let allTasks = require("./main")


app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))

app.use(express.static(path.join(__dirname, "public")))

app.use(express.urlencoded({extended:true}))
// app.use(express.json())

app.get("/lists",(req,res) =>{
    console.log("Tasks being sent to template:", allTasks);
    res.render("index.ejs",{allTasks})
})

app.post("/add",(req,res) =>{
    let {input} = req.body;
    let newTask = {
        // id: Date.now().toString(), // Generate unique ID
        id:uuidv4(),
        task: input
    };
    allTasks.push(newTask);
    console.log("Updated tasks:", allTasks);
    res.redirect("/lists");
})
app.patch("/lists/:id",(req,res) =>{
    let {id} = req.params
    console.log(id)
    // let task = allTasks.find((p) => id === p.id);
    // res.render("edit.ejs", {task})
    res.send("patch req acceped.")
})
app.post("/submit",(req,res) =>{
    res.redirect("/lists")
})

app.listen(port,() =>{
    console.log("App is running on port",port)
})