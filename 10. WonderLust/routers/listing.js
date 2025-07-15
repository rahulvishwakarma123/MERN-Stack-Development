const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js')
const { isLoggedIn } = require('../middleware.js')
const { isOwner, validateListing } = require('../middleware.js')
const listingController = require('../controllers/listings.js')
const multer  = require('multer')
const {storage} = require('../cloudConfig.js')
const upload = multer({ storage })


router.route('/')
.get(wrapAsync(listingController.allListings))
.post(isLoggedIn , upload.single('listing[image]'), validateListing, wrapAsync(listingController.createListing))


// new page route
router.get('/new', isLoggedIn, listingController.renderNewForm)

// Edit route
router.get('/:id/edit', isLoggedIn, isOwner, wrapAsync(listingController.renderEditFrom))


router.route('/:id')
.patch(validateListing, isOwner, wrapAsync(listingController.updateListing))
.get(wrapAsync(listingController.showListing))
.delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteListing))

module.exports = router;