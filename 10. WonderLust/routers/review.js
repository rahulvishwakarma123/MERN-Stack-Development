const express = require('express');
const router = express.Router({mergeParams:true});
const wrapAsync = require('../utils/wrapAsync.js')
const {isLoggedIn, validateReview, isReveiwAuthor} = require('../middleware.js')
const reviewController = require('../controllers/reviews.js')

// Reviews
// Post Route
router.post('/',validateReview, isLoggedIn, wrapAsync(reviewController.postReview))

// Delete the review route
router.delete('/:reviewId', isLoggedIn, isReveiwAuthor, wrapAsync(reviewController.deleteReview))

module.exports = router;