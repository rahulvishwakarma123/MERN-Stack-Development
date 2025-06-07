const mongoose = require('mongoose')
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon")
}

main().then(res => {
    console.log("Connection succesful.")
}).catch(err => {
    console.log("Something wrong in your connection.")
    console.log(err)
})

const bookShema = mongoose.Schema({
    name: {
        type: "String",
        require: true,
    },
    author: {
        type: "String",
    },
    prise: {
        type: Number,
        min: [1, "prise is too low for selling on amazon."],
    },
    discount: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: ["Fiction", "Non-fiction"]
    },
    genre: {
        type: [String]
    }
})

const book = mongoose.model("book", bookShema)

// let book1 = new book({name: "Mathmatics XII", author: "R.D Sharma", prise: 1200})
// book1.save().then(res =>{
//     console.log(res)
// }).catch(err =>{
//     console.log(err)
// })
// let book1 = new book({name: "Marvel Comic", prise: 1200, genre:["Trill","Action","Fiction"]})
// book1.save().then(res =>{
//     console.log(res)
// }).catch(err =>{
//     console.log(err)
// })

book.findByIdAndUpdate(
    '68444b248289107cfb3f9359',
    { prise: -1 },
    {
        new: true, // prints the updated result
        runValidators: true // checks the validations which are defined in the Schema
    }
).then(res => {
    console.log(res)
}).catch(err =>{
    console.log(err.errors.prise.properties.message)
})