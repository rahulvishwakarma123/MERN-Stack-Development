const express = require('express');
const router = express.Router();
const Listing = require('../models/listing.js')
const wrapAsync = require('../utils/wrapAsync.js')
const ExpressError = require('../utils/ExpressError.js')
const { listingSchema } = require('../schema.js')

const validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body)
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",")
        throw new ExpressError(400, errMsg)
    } else {
        next()
    }
}

// All listing
router.get('/', wrapAsync(async (req, res) => {
    let allLists = await Listing.find()
    // res.send(allLists)
    res.render('listing/listings.ejs', { allLists })
}))

// new page route
router.get('/new', (req, res) => {
    res.render('listing/new.ejs')
})

// Create route
router.post('/', validateListing, wrapAsync(async (req, res) => {
    let newList = req.body.listing
    let list = await Listing.create(newList)
    req.flash('success', 'New list created.')
    res.redirect('/listing')
}))

// Show route
router.get('/:id', wrapAsync(async (req, res) => {
    let { id } = req.params
    let list = await Listing.findById(id).populate('review')
    if (!list) {
        req.flash('error', 'Listing you have requested does not exist!');
        return res.redirect('/listing');
    }
    res.render('listing/show.ejs', { list });
}))

// Edit route
router.get('/:id/edit', wrapAsync(async (req, res) => {
    let { id } = req.params
    let list = await Listing.findById(id)
    if (!list) {
        req.flash('error', 'Listing you have requested does not exist!');
        return res.redirect('/listing');
    }
    res.render('listing/edit.ejs', { list })
}))

// UPDATE IN DATABASE
router.patch('/:id', validateListing, wrapAsync(async (req, res) => {
    if (!req.body.listing) {
        throw new ExpressError(400, "Please provide valid data.")
    }
    let { id } = req.params
    let list = req.body.listing;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing })
    req.flash('success', 'List Upadated Successfully!')
    res.redirect('/listing')
}))

// Delete route
router.delete('/:id', wrapAsync(async (req, res) => {
    let { id } = req.params
    await Listing.findByIdAndDelete(id)
    req.flash('success', 'List Deleted!')
    res.redirect('/listing')
}))

module.exports = router;