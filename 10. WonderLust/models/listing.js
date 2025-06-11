const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        set: (v) => v === "" ? "https://as1.ftcdn.net/jpg/02/99/64/04/1000_F_299640444_r43hVyuVUvqtwg3s3SH4tnEZjz3vHEmz.jpg" : v,
        default: "https://as1.ftcdn.net/jpg/02/99/64/04/1000_F_299640444_r43hVyuVUvqtwg3s3SH4tnEZjz3vHEmz.jpg"
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