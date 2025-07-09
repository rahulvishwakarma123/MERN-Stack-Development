const express = require('express')
const app = express();

const cookieParser = require('cookie-parser')

app.use(cookieParser('secretCode'))

app.get('/',(req,res) =>{
    res.send('Your app is running.')
})

app.get('/getcookie', (req,res) =>{
    res.cookie('name','Rahul', {signed: true})
    res.send('Your cookie.')
})
app.get('/cookie',(req,res) =>{
    console.dir(req.signedCookies)
    console.dir(req.cookies)
    res.send('cookies are printed.')
})

app.listen(3000, () =>{
    console.log('app is running.')
})