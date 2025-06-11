const mongoose = require('mongoose');
const initdata = require('./data.js');
const listing = require('../models/listing.js');

// Connect to MongoDB
async function main() {
    await mongoose.connect('mongodb://localhost:27017/wonderlust')
}

main().then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
})

async function initDb() {
    await listing.deleteMany({})
    await listing.insertMany(initdata.data)
    console.log('Data has been initialized')
}

initDb();