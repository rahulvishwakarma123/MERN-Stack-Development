const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();
const mysql = require('mysql2');
const path = require('path')
const methodOverride = require('method-override');
const { v4: uuidv4 } = require('uuid');
let port = 3000;

app.use(methodOverride('_method'))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use(express.urlencoded({extended:true}))

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'a5yypy2hjz',
  database: 'delta_db'
});
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password()
  ];
}

//======================================= Home page route ===========================================
app.get('/', (req, res) => {
  let q = `SELECT count(*) FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err
      let count = (result[0]["count(*)"])
      res.render("home.ejs", { count })
    })
  } catch (err) {
    console.log(err)
    res.send("somthing went wrong with the database.")
  }
})

// ======================================= show page route ===========================================
app.get('/users', (req, res) => {
  let q = `SELECT * FROM user`
  try {
    connection.query(q, (err, users) => {
      if (err) throw err
      res.render("showuser.ejs", { users })
    })
  } catch (err) {
    res.send("Some error in database.")
  }
})

//======================================= Edit page route ===========================================
app.get('/user/:id', (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`
  try {
    connection.query(q, (err, result) => {
      if (err) throw err
      let user = result[0];
      console.log(user.password)
      res.render("edit.ejs", {user})
    })
  } catch (err) {
    res.send("Error in Database.")
  }
})

// ======================================= Updation in database ===========================================
app.patch('/user/:id', (req, res) => {
  let { id } = req.params
  let {username , password} = req.body
  let q = `SELECT * FROM user WHERE id = '${id}'`
  try {
    connection.query(q, (err, result) => {
      if (err) throw err
      let user = result[0]
      if(`${password}` === `${user.password}`){
        let query = `UPDATE user SET username = '${username}' WHERE id = '${id}'`
        try{
          connection.query(query, (err,result2) =>{
            if(err) throw err
            res.redirect('/users')
          })
        }catch(err) {
          res.send("Some error in updation in DB.")
        }
      }else{
        res.send("Enter the correct password.")
      }
    })
  } catch (err) {
    res.send("Error in Database.")
  }
})

// =============================== New user ====================================

app.get('/users/new', (req,res) =>{
  let id = uuidv4();
  res.render('new.ejs', {id})
})

// =============================== new user to database ====================================
app.post('/users/:id', (req,res) =>{
  let {id} = req.params
  let {username, email, password} = req.body
  let data = [id, username, email, password]
  let query = `INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)`
  try {
    connection.query(query, data, (err, result) => {
      if (err) throw err
      console.log(result)
      res.redirect('/users')
    })
  } catch (err) {
    res.send("Error in Database.")
  }
})
// =============================== deletion confirmation page ====================================
app.get('/user/:id/delete', (req,res) =>{
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`
  try {
    connection.query(q, (err, result) => {
      if (err) throw err
      let user = result[0];
      console.log(user.password)
      res.render("delete.ejs", {user})
    })
  } catch (err) {
    res.send("Error in Database.")
  }
})
// =============================== delete the user from the database ====================================
app.delete('/user/:id', (req, res) => {
  let { id } = req.params
  let {password} = req.body
  let q = `SELECT * FROM user WHERE id = '${id}'`
  try {
    connection.query(q, (err, result) => {
      if (err) throw err
      let user = result[0]
      if(`${password}` === `${user.password}`){
        let query = `DELETE FROM user WHERE id = '${id}'`
        try{
          connection.query(query, (err,result2) =>{
            if(err) throw err
            res.redirect('/users')
          })
        }catch(err) {
          res.send("Some error in updation in DB.")
        }
      }else{
        res.send("Enter the correct password.")
      }
    })
  } catch (err) {
    res.send("Error in Database.")
  }
})

// =============================== port listener ====================================
app.listen(port, () => {
  console.log("App is running on port", port)
})


// let q = "INSERT INTO user (id, username, email, password) VALUES ?";

// try {
//   connection.query(q, [data], (err, result) => {
//     if (err) throw err
//     console.log(result)
//   })
// } catch (err) {
//   console.log(err)
// }
// connection.end();

