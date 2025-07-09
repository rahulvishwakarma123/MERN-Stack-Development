const express = require('express');
const router = express.Router({mergeParams:true});

const { reviewSchema } = require('../schema.js')
const wrapAsync = require('../utils/wrapAsync.js')
const Reviews = require('../models/reviews.js')
const Listing = require('../models/listing.js')
const ExpressError = require('../utils/ExpressError.js')

const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body)
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",")
        throw new ExpressError(400, errMsg)
    } else {
        next()
    }
}

// Reviews
// Post Route
router.post('/',validateReview, wrapAsync( async (req, res) => {
        let id = req.params.id;
        let listing = await Listing.findById(id);
        let newReview = new Reviews(req.body.review);
        listing.review.push(newReview);

        await newReview.save();
        await listing.save();

        res.redirect(`/listing/${listing._id}`)
}))

// Delete the review route
router.delete('/:reviewId',wrapAsync(async(req,res) =>{
    let {id, reviewId} = req.params
    let listing = await Listing.findByIdAndUpdate(id, {$pull:{review: reviewId}})
    console.log(listing)
    await Reviews.findByIdAndDelete(reviewId)
    res.redirect(`/listing/${id}`)
}))

module.exports = router;