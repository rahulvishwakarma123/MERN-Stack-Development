const express = require('express')
const app = express();
const port = 3000;

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
        throw new Error('ACCESS DENIED.')
    }
})
app.get('/api', checkToken, (req,res) =>{
    res.send('data')
})


app.use('/',(req,res) =>{
    res.send('page not found,')
})
app.listen(port, () =>{
    console.log(`App is runnin on port ${port}`)
})