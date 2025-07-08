const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const mongoose = require('mongoose')
const Listing = require('./models/listing.js')
const Reviews = require('./models/reviews.js')
const methodOverride = require('method-override')
const ejsMate = require('ejs-mate')
const wrapAsync = require('./utils/wrapAsync.js')
const ExpressError = require('./utils/ExpressError.js')
const { listingSchema, reviewSchema } = require('./schema.js')

const main = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/wonderlust')
};
main().then(res => {
    console.log('Connected to MongoDB')
}).catch(err => {
    console.log(err)
})

app.use(methodOverride('_method'))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))
app.engine('ejs', ejsMate)
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));

const validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body)
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",")
        throw new ExpressError(400, errMsg)
    } else {
        next()
    }
}
const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body)
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",")
        throw new ExpressError(400, errMsg)
    } else {
        next()
    }
}

// Home page route
app.get('/', (req, res) => {
    res.render('listing/home.ejs')
})

// All listing
app.get('/listings', wrapAsync(async (req, res) => {
    let allLists = await Listing.find()
    // res.send(allLists)
    res.render('listing/listings.ejs', { allLists })
}))

// new page route
app.get('/listing/new', (req, res) => {
    res.render('listing/new.ejs')
})
// show route
app.get('/listing/:id', wrapAsync(async (req, res) => {
    let { id } = req.params
    let list = await Listing.findById(id).populate('review')
    res.render('listing/show.ejs', { list })
}))

// Create route
app.post('/listing', validateListing, wrapAsync(async (req, res) => {
    let newList = req.body.listing
    let list = await Listing.create(newList)
    res.redirect('/listings')
}))
// Edit route
app.get('/listing/:id/edit', wrapAsync(async (req, res) => {
    let { id } = req.params
    let list = await Listing.findById(id)
    res.render('listing/edit.ejs', { list })
}))

// UPDATE IN DATABASE
app.patch('/listing/:id', validateListing, wrapAsync(async (req, res) => {
    if (!req.body.listing) {
        throw new ExpressError(400, "Please provide valid data.")
    }
    let { id } = req.params
    let list = req.body.listing;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing })
    res.redirect('/listings')
}))
// Delete route
app.delete('/listing/:id', wrapAsync(async (req, res) => {
    let { id } = req.params
    await Listing.findByIdAndDelete(id)
    res.redirect('/listings')
}))

// Reviews
// Post Route
app.post('/listing/:id/review',validateReview, wrapAsync( async (req, res) => {
        let id = req.params.id;
        let listing = await Listing.findById(id);
        let newReview = new Reviews(req.body.review);
        listing.review.push(newReview);

        await newReview.save();
        await listing.save();

        res.redirect(`/listing/${listing._id}`)
}))

// Delete the review route
app.delete('/listing/:id/review/:reviewId',wrapAsync(async(req,res) =>{
    let {id, reviewId} = req.params
    let listing = await Listing.findByIdAndUpdate(id, {$pull:{review: reviewId}})
    console.log(listing)
    await Reviews.findByIdAndDelete(reviewId)
    res.redirect(`/listing/${id}`)
}))

// Error handling 
app.use((err, req, res, next) => {
    let { status = 500, message = "Something went wrong" } = err
    res.status(status).render('error.ejs', { message });
})

app.all(/.*/, (req, res, next) => {
    next(new ExpressError(404, "Page not found"));
});

// HTTP request listener
app.listen(port, () => {
    console.log("App is running on", port)
})