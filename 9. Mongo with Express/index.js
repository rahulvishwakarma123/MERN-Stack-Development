const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require("path")
const port = 3000;
const chat = require('./models/chats.js')
const methodOverride = require('method-override')
const ExpressError = require('./ExpressError.js')

async function main() {
    mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp")
}

main().then(res => {
    console.log("connection successful.")
}).catch(err => {
    console.log(err)
})

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

function asyncWrap(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(err => next(err))
    }
}

app.get('/index', async (req, res) => {
    let allChats = await chat.find()
    res.render("index.ejs", { allChats })
})

// NEW - show route
app.get('/index/:id', asyncWrap(async (req, res, next) => {
    let { id } = req.params
    let chatObj = await chat.findById(`${id}`)
    if (!chatObj) {
        next(new ExpressError(404, "chat not found."))
    }
    res.render('show.ejs', { chatObj })
}))

// Edit route
app.get('/index/:id/edit', asyncWrap(async (req, res) => {
    let { id } = req.params
    let chatObj = await chat.findById(`${id}`)
    res.render('edit.ejs', { chatObj })
}))
//update route
app.patch('/index/:id', asyncWrap(async (req, res) => {
    let { id } = req.params
    let { newMessage } = req.body
    let obj = await chat.findByIdAndUpdate(id, { message: newMessage })
    console.log(obj)
    res.redirect("/index")
}))

// Delete route
app.delete('/index/:id', asyncWrap(async (req, res) => {
    let { id } = req.params
    let obj = await chat.findByIdAndDelete(id)
    res.redirect("/index")
}))
// New route
app.get('/new', (req, res) => {
    res.render("new.ejs")
})
// Create route
app.post('/new', async (req, res, next) => {
    // this method is another way of error handling.
    try { 
        let { sender, receiver, message } = req.body
        let newChat = new chat({ sender: sender, receiver: receiver, message: message, created_at: new Date() })
        await newChat.save();
        res.redirect('/index')
    }
    catch (err) {
        console.log(err)
        next(err)
    }
})

// error handling middlewares

const validationError = (err) => {
    console.log("This is the validation error. Please follow the rules.")
    console.log(err.message)
    return err;
}

app.use((err,req,res,next) =>{
    console.log(err.name)
    if(err.name === "ValidationError"){
       err = validationError(err)
    }
    next(err)
})

app.use((err, req, res, next) => {
    let { status = 500, message = "Some error Occured." } = err
    res.status(status).send(message);
})

app.listen(port, () => {
    console.log("app is running on port", port)
})