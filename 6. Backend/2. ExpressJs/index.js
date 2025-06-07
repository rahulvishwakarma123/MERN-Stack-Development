const express = require("express")
const app = express();
const port = 3000;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`App in renning on port ${port}.`)
})

app.get("/",(req,res) =>{
    res.send("This is the home page")
})
app.get("/user/:name",(req,res) =>{
    let userName = req.params.name;
    res.send(`Hello ${userName}`)
})
app.get("/search",(req,res) =>{
    let {q} = req.query;
    res.send(`Here are the search results for ${q}.`)
})

app.post("/",(req,res) =>{
    res.send("You sent the post request.")
})
app.get("/contact",(req,res) =>{
    res.send("This is the contact page.")
})
app.get("/about",(req,res) =>{
    res.send("This is the about page.")
})
