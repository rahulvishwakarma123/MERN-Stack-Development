const mongoose = require('mongoose');
const initdata = require('./data.js');
const listing = require('../models/listing.js');
// const { object } = require('joi');

// Connect to MongoDB
async function main() {
    await mongoose.connect(process.env.ATLAS_URL)
}

main().then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
})

async function initDb() {
    await listing.deleteMany({})
    initdata.data = initdata.data.map((obj) => ({...obj, owner: '687a4dfa85da4278aa887187' }))
    await listing.insertMany(initdata.data)
    console.log('Data has been initialized')
}

initDb();