const mongoose = require('mongoose')

main().then(() => {
    console.log("connection succesful.")
})
    .catch((err) => console.log(err))
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/collage')
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

const User = mongoose.model("User", userSchema)

const user1 = new User({name:"tony", email: "tony@gmail.com", age: 40})
const user2 = new User({name:"wanda", email: "wanda@gmail.com", age: 30})


// returns a promise
// user1.save().then((res) =>{  
//     console.log("user1 is saved in the database.")
//     console.log(res)
// }).catch((err) =>{
//     console.log(err)
// })
// user2.save().then((res) =>{
//     console.log("user2 is saved in the database.")
//     console.log(res)
// }).catch((err) =>{
//     console.log(err)
// })
// --------------------------------------------insertMany()---------------------------------
// User.insertMany([ 
//     {name: "Hulk", email: "hulk@gmail.com", age: 40},
//     {name: "captain", email: "captain@gmail.com", age: 150},
//     {name: "widdow", email: "widdow@gmail.com", age: 25}
// ]).then((res) =>{
//     console.log("Multiple data added.")
//     console.log(res)
// })

// ======================================== find() =======================================

// Returns a thenable Query object.
// User.find({age: { $lt: 40}}).then((res) =>{
//     console.log(res)
// })
// User.findOne({}).then((res) =>{
//     console.log(res)
// })
// User.findById('683d9e99d58bb82dfd99d78f').then((res) =>{
//     console.log(res)
// })

// ================================================= update() ====================================

// Returns a thenable Query object.
// User.updateOne({name: "wanda"}, {age:35}).then((res) =>{
//     console.log(res)
// })

// ================================================= findOneAndUpdate() ====================================

// Returns a thenable Query object.
// User.findOneAndUpdate({name: "Hulk"}, {age:47}, {new: true}).then((res) =>{
//     console.log(res)
// })


// ================================================= findByIdAndUpdate() ====================================

// Returns a thenable Query object.
// User.findByIdAndUpdate('683da3eb34f87d63de1a5e11', {age:49}, {new: true}).then((res) =>{
//     console.log(res)
// })

// ================================================= findOneAndDelete() ====================================

// Returns a thenable Query object.
// User.findOneAndDelete({name: "Hulk"},{new: true}).then((res) =>{
//     console.log(res)
// })


// ================================================= findByIdAndDelete() ====================================

// Returns a thenable Query object.
// User.findByIdAndDelete("683d9e99d58bb82dfd99d78e").then((res) =>{
//     console.log(res)
// })



