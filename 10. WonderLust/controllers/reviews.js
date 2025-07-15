const Reviews = require('../models/reviews.js') 
const Listing = require('../models/listing.js')

module.exports.postReview =  async (req, res) => {
        let id = req.params.id;
        let listing = await Listing.findById(id);
        let newReview = new Reviews(req.body.review);
        newReview.author = req.user._id;
        listing.review.push(newReview);

        await newReview.save();
        await listing.save();
        req.flash('success','New Review created.')
        res.redirect(`/listing/${listing._id}`)
}

module.exports.deleteReview = async(req,res) =>{
    let {id, reviewId} = req.params
    let listing = await Listing.findByIdAndUpdate(id, {$pull:{review: reviewId}})
    await Reviews.findByIdAndDelete(reviewId)
    req.flash('success','Reveiw deleted successfully!')
    res.redirect(`/listing/${id}`)
}