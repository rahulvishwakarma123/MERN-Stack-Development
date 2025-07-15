const Listing = require('./models/listing.js');
const Reveiw = require('./models/reviews.js');
const { reviewSchema, listingSchema} = require('./schema.js');
const {ExpressError} = require('./utils/ExpressError.js')


module.exports.isLoggedIn = (req,res,next) => { 
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash('error','You must have be LogIn!')
        return res.redirect('/login')
    }
    next()
}

module.exports.redirectUrlSave = (req,res,next) => {
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}


module.exports.validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body)
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",")
        throw new ExpressError(400, errMsg)
    } else {
        next()
    }
}

module.exports.validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body)
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",")
        throw new ExpressError(400, errMsg)
    } else {
        next()
    }
}

module.exports.isOwner = async (req,res,next) => {
    let { id } = req.params
    let list = await Listing.findById(id)
    if(!list.owner._id.equals(req.user._id)){
        req.flash('error',`you have not permissions to perform operations!`)
        return res.redirect(`/listing/${id}`)
    }
    next()
}

module.exports.isReveiwAuthor = async (req,res,next) => {
        let { id, reviewId } = req.params
        let review = await Reveiw.findById(reviewId)
        if(!review.author.equals(req.user._id)){
            req.flash('error',`you are not the author if the review!`)
            return res.redirect(`/listing/${id}`)
        }
        next()
    }