const express = require('express');
const app = express();
const PORT = 3000;
const session = require('express-session')
const flash = require('connect-flash')
const Path = require('path')

app.set('view engine', 'ejs')
app.set('views', Path.join(__dirname, 'views'))

// Middleware 
app.use(session({secret: "SecretCode", resave:false, saveUninitialized: true}))
app.use(flash())

app.use('/',(req,res,next) =>{
    res.locals.successMsg = req.flash('success')
    res.locals.errorMsg = req.flash('error')
    next()
})

// Basic route
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});
app.get('/getCount', (req, res) => {
    if(req.session.count){
        req.session.count++
    }else{
        req.session.count = 1
    }
    res.send(`You send the request ${req.session.count} times.`);
});

app.get('/register', (req,res) =>{
    let {name = 'anonymous'} = req.query
    console.log(req.session)
    req.session.name = name
    if(name === 'anonymous') req.flash('error','User is not registered.')
    else req.flash('success', 'You are registered successfully.')
    res.redirect('/hello')

})

app.get('/hello',(req,res) =>{

    res.render('page.ejs', {name : req.session.name})
})




// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});