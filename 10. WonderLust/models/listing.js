const mongoose = require('mongoose');
const Reviews = require('./reviews.js')
const User = require('./user.js')
const Schema = mongoose.Schema;

let listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 200
    },
    image: {
        url:String,
        filename: String,
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
    review :[
        {
            type : Schema.Types.ObjectId,
            ref : 'Review'
        }
    ],
    owner: {
        type : Schema.Types.ObjectId,
        ref : 'User'
    }
})

listingSchema.post('findOneAndDelete',async (listing) =>{
    if(listing){
        await Reviews.deleteMany({_id : {$in : listing.review}})
    }
})

const listing = mongoose.model('listing', listingSchema);

module.exports = listing;