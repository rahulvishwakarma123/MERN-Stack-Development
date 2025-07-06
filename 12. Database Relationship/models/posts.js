const mongoose = require('mongoose')
const { Schema } = mongoose
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relation')
}

main().then(() => {
    console.log('connection successful.')
}).catch((err) => {
    console.log('some err in database.')
});

const userSchema = mongoose.Schema({
    user : String,
    email: String,
});

const postSchema = mongoose.Schema({
    content: String,
    likes : Number,
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Post = mongoose.model("Post", postSchema)
const User = mongoose.model("User", userSchema)

const addData = async () =>{
    let user1 = new User({
        user : "rahul vishwakarma",
        email : "vishwa.rahul@gmail.com"
    })
    
    let post1 = new Post({
        content : "Do hardwork",
        likes : 23,
    })

    post1.user = user1._id

    await user1.save()
    await post1.save()
}

// addData();

const getData = async () =>{
    let result = await Post.findOne({}).populate('user', 'user')
    console.log(result)
}

getData();