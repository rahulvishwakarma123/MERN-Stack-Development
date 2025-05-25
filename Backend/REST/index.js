const methodOverride = require('method-override')
const express = require("express")
const app = express()
const { v4: uuidv4 } = require('uuid');
const port = 3000
const path = require("path")

app.use(methodOverride('_method'))

app.set("view engine","ejs")
app.set("views", path.join(__dirname,"views"))

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}))
app.use(express.json())

let posts = [
    {
        id: uuidv4(),
        username: "John Doe",
        content: "Hello, world!"
    },
    {
        id: uuidv4(),
        username: "Jane Smith",
        content: "Learning MERN stack is fun!"
    },
    {
        id: uuidv4(),
        username: "Alice Johnson",
        content: "Express makes backend development easier."
    }
]

app.get("/posts",(req,res) =>{
    res.render("index.ejs",{posts})
})
app.get("/posts/new",(req,res) =>{
    res.render("new.ejs")
})
app.post("/posts",(req,res) =>{
    let {username,content} = req.body;
    let id = uuidv4();
    posts.push({id,username,content})
    // console.log(req.body.content)
    res.redirect("/posts")
})

app.get("/posts/:id",(req,res) =>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id)
    if(!post) {
        return res.status(404).send("Post not found");
    }
    console.log(post)
    res.render("show.ejs", {post})
})

app.patch("/posts/:id", (req,res) =>{
    let {id} = req.params
    let newContent = req.body.content
    let post = posts.find((p) => id === p.id)
    post.content = newContent
    console.log(post)
    res.redirect("/posts")
})
app.get("/posts/:id/edit",(req,res) =>{
    let {id} = req.params
    let post = posts.find((p) => id === p.id)
    res.render("edit.ejs",{post})
})
app.delete("/posts/:id",(req,res) =>{
    let {id} = req.params
    let post = posts.find((p) => id === p.id)
    posts = posts.filter((p) => id != p.id)
    res.redirect("/posts")
})

app.listen(port,() =>{
    console.log(`App is running on port ${port}.`)
})