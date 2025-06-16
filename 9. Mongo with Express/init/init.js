const mongoose = require("mongoose")
const chat = require('../models/chats.js')
async function main() {
    mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp")
}

main().then(() =>{
    console.log('connection succesful.')
}).catch(err =>{
    console.log(err)
})



chat.insertMany([
    { sender: "Alice", receiver: "Bob", message: "Hey Bob, how are you?", created_at: new Date() },
    { sender: "Bob", receiver: "Alice", message: "I'm good, Alice. You?", created_at: new Date() },
    { sender: "Charlie", receiver: "Dave", message: "Did you check the report?", created_at: new Date() },
    { sender: "Dave", receiver: "Charlie", message: "Yes, looks good!", created_at: new Date() },
    { sender: "Emma", receiver: "Frank", message: "Lunch at 1 PM?", created_at: new Date() },
    { sender: "Frank", receiver: "Emma", message: "Sure, see you!", created_at: new Date() },
    { sender: "Grace", receiver: "Harry", message: "Can you share the files?", created_at: new Date() },
    { sender: "Harry", receiver: "Grace", message: "Shared on drive.", created_at: new Date() },
    { sender: "Ian", receiver: "Jane", message: "Good luck for your interview!", created_at: new Date() },
    { sender: "Jane", receiver: "Ian", message: "Thanks Ian!", created_at: new Date() },
    { sender: "Kate", receiver: "Leo", message: "Meeting rescheduled to 3 PM.", created_at: new Date() },
    { sender: "Leo", receiver: "Kate", message: "Noted, thanks!", created_at: new Date() },
    { sender: "Maya", receiver: "Nate", message: "Happy Birthday Nate!", created_at: new Date() },
    { sender: "Nate", receiver: "Maya", message: "Thanks Maya!", created_at: new Date() },
    { sender: "Olivia", receiver: "Peter", message: "Are we still going hiking?", created_at: new Date() },
    { sender: "Peter", receiver: "Olivia", message: "Yes, ready at 7!", created_at: new Date() },
    { sender: "Quinn", receiver: "Ryan", message: "Please review the PR.", created_at: new Date() },
    { sender: "Ryan", receiver: "Quinn", message: "Will do it tonight.", created_at: new Date() },
    { sender: "Sara", receiver: "Tom", message: "Zoom link for the session?", created_at: new Date() },
    { sender: "Tom", receiver: "Sara", message: "Sent via email.", created_at: new Date() }
  ]).then(() => console.log("Data inserted successfully"));
  