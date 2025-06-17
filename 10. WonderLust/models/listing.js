const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 50
    },
    image: {
        type: String,
        set: (v) => v === "" ? "https://static.thenounproject.com/png/1077596-200.png" : v,
        default: "https://static.thenounproject.com/png/1077596-200.png"
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
})

const listing = mongoose.model('listing', listingSchema);

module.exports = listing;