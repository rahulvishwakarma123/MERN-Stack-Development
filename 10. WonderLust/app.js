if(process.env.NODE_ENV != 'production'){
    require('dotenv').config()
}


const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const ejsMate = require('ejs-mate')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const User = require('./models/user.js')

const listingRouter = require('./routers/listing.js')
const reviewRouter = require('./routers/review.js')
const userRouter = require('./routers/user.js')


const main = async () => {
    await mongoose.connect(process.env.ATLAS_URL)
};
main().then(res => {
    console.log('Connected to AtlasDB')
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


const sessionOptions = {
    secret : 'mysecretcode',
    resave : false,
    saveUninitialized : true,
    cookie:{
        expires : Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge : 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
}

app.use(session(sessionOptions))
app.use(flash())

app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use((req,res,next) =>{
    res.locals.success = req.flash('success')
    res.locals.error = req.flash('error')
    res.locals.currUser = req.user;
    next()
})

// Home page route
app.get('/', (req, res) => {
    res.render('listing/home.ejs')
})

app.use('/listing', listingRouter)
app.use('/listing/:id/review',reviewRouter)
app.use('/', userRouter)



// Error handling 
app.use((err, req, res, next) => {
    let { status = 500, message = "Something went wrong" } = err
    console.log(err)
    res.status(status).render('error.ejs', { message });
})

// app.all(/.*/, (req, res, next) => {
//     next(new ExpressError(404, "Page not found"));
// });



// HTTP request listener
app.listen(port, () => {
    console.log("App is running on", port)
})