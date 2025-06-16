const express = require('express')
const app = express();
const port = 3000;
const ExpressError = require('./ExpressError')

app.use((req,res,next) =>{
    console.log("middleware 1")
    next();
})
// Logger
// app.use('/', (req,res,next) =>{
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method)
//     console.log(req.path)
//     console.log(req.time)
//     // console.log(req.query)
//     console.log(req.hostname)
//     next();
// })
app.get('/', (req,res) =>{
    res.send("request accepted.")
})
// Small authentication
const checkToken = ('/api',(req,res,next) =>{
    let {token} = req.query;
    console.log(req.query)
    if(token === 'giveaccess'){
        next();
    }else{
        throw new ExpressError(401,'ACCESS DENIED.')
    }
})
app.get('/api', checkToken, (req,res) =>{
    res.send('data')
})

// Error handling
app.get('/err',(req,res) =>{
    abcd = abcd;
})
app.use((err,req,res,next) =>{
    console.log("----------ERROR----------")
    let{status = 500, message = "Something went wrong."} = err;
    res.status(status).send(message)
})

// Custom error
app.get('/admin',(req,res) =>{
    throw new ExpressError(403,'Access Denied. Only admin can access this route.')
})

// app.use('/',(req,res) =>{
//     res.send('page not found,')
// })
app.listen(port, () =>{
    console.log(`App is runnin on port ${port}`)
})