const mongoose = require('mongoose')

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relation')
}

main().then(() => {
    console.log('connection successful.')
}).catch((err) => {
    console.log('some err in database.')
});

// ONE TO FEW - store child document inside the parent.
// APPROACH - 1 (one - less than 100)

const userSchema = mongoose.Schema({
    name: String,
    address: [
        {
            _id: false,
            location: String,
            city: String
        }
    ]
})

const user = mongoose.model('user', userSchema)

let addUser = async () => {
    let user1 = new user({
        name: "Rahul vishwakarma",
        address: [{
            location: "Ujjikhor ,sahjanwa",
            city: "Gorakhpur",
        }]
    })
    user1.address.push({
        location: "gahasand",
        city: "gorkhpur",
    })
    let result = await user1.save();
    console.log(result)
}

addUser();