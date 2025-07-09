const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const ejsMate = require('ejs-mate')
const ExpressError = require('./utils/ExpressError.js')


const listing = require('./routers/listing.js')
const review = require('./routers/review.js')


const main = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/wonderlust')
};
main().then(res => {
    console.log('Connected to MongoDB')
}).catch(err => {
    console.log(err)
})


// middlewares
app.use(methodOverride('_method'))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))
app.engine('ejs', ejsMate)
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));




// Home page route
app.get('/', (req, res) => {
    res.render('listing/home.ejs')
})



app.use('/listing', listing)
app.use('/listing/:id/review',review)



// Error handling 
app.use((err, req, res, next) => {
    let { status = 500, message = "Something went wrong" } = err
    res.status(status).render('error.ejs', { message });
})

app.all(/.*/, (req, res, next) => {
    next(new ExpressError(404, "Page not found"));
});



// HTTP request listener
app.listen(port, () => {
    console.log("App is running on", port)
})