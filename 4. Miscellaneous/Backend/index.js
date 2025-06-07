 
const express = require('express')
const app = express();
const port = 3000;

// To read the data passed by the url sent by the post request.
app.use(express.urlencoded({extended:true})) 
app.use(express.json()) // to read the json data.

app.get("/register",(req,res) =>{
    let {username, password} = req.query;
    res.send(`GET Request Accepted by user ${username}.`)
})
app.post("/register",(req,res) =>{
    // console.log(req.body)
    let {username, password} = req.body;
    res.send(`POST Request Accepted by user ${username}.`)
})

app.listen(port, () =>{
    console.log(`App is running on port ${port}.`)
})
