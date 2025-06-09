const mongoose = require("mongoose")

async function main() {
    mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}
const chatSchema = mongoose.Schema({
    sender:{
        type: String,
        required: true,
    },
    receiver:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        maxLength: 50
    },
    created_at:{
        type:Date,
        required: true,
    }
})

const chat = mongoose.model("chat", chatSchema)

module.exports = chat;