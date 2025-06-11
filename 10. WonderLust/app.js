const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const mongoose = require('mongoose')
const listing = require('./models/listing.js')
const methodOverride = require('method-override')

const main = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/wonderlust')
};
main().then(res => {
    console.log('Connected to MongoDB')
}).catch(err => { 
    console.log(err)
})

app.use(methodOverride('_method'))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'))
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')))


app.get('/listings', async (req, res) => {
    let allLists = await listing.find()
    // res.send(allLists)
    res.render('listing/home.ejs', {allLists})
})

// new page route
app.get('/listing/new', (req,res) =>{
    res.render('listing/new.ejs')
})
// show route
app.get('/listing/:id', async (req, res) => {
    let {id} = req.params
    let list = await listing.findById(id)
    res.render('listing/show.ejs', {list})
})
app.post('/listing', async (req,res) =>{
    console.log(req.body)
    let newList = req.body.listing
    let list = await listing.insertOne(newList)
    res.redirect('/listings')
})
// Delete route
app.delete('/listing/:id', async (req,res) =>{
    let {id} = req.params
    await listing.findByIdAndDelete(id)
    res.redirect('/listings')
})
// Edit route
app.get('/listing/:id/edit',async (req,res) =>{
    let {id} = req.params
    let list = await listing.findById(id)
    res.render('listing/edit.ejs', {list})
})

// UDATE IN DATABASE
app.post('/listing/:id', async (req,res) =>{
    let {id} = req.params
    let list = req.body.listing;
    await listing.findByIdAndUpdate(id,list)
    res.redirect('/listings')
})


app.listen(port, () => {
    console.log("App is running on", port)
})