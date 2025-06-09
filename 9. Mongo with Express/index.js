const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require("path")
const port = 3000;
const chat = require('./models/chats.js')
const methodOverride = require('method-override')

async function main() {
    mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}

main().then(res =>{
    console.log("connection successful.")
}).catch(err =>{
    console.log(err)
})

app.set("view engine" ,"ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))


app.get('/index', async (req,res) =>{
    let allChats = await chat.find()
    res.render("index.ejs", {allChats})
})

// Edit route
app.get('/index/:id/edit', async (req,res) =>{
    let {id} = req.params
    let chatObj = await chat.findById(`${id}`)
    res.render('edit.ejs',{chatObj})
})
//update route
app.patch('/index/:id',async (req,res) =>{
    let {id} = req.params
    let {newMessage} = req.body
    let obj = await chat.findByIdAndUpdate(id, {message: newMessage})
    console.log(obj)
    res.redirect("/index")
})

// Delete route
app.delete('/index/:id',async (req,res) =>{
    let {id} = req.params
    let obj = await chat.findByIdAndDelete(id)
    res.redirect("/index")
})
// New route
app.get('/new', (req,res) =>{
    res.render("new.ejs")
})
// Create route
app.post('/new', async (req,res) =>{
    let {sender, receiver, message} = req.body
    chat.insertOne({sender:sender, receiver: receiver, message: message, created_at: new Date()})
    res.redirect('/index')
})

app.listen(port, () =>{
    console.log("app is running on port",port)
})