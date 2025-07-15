const Listing = require('../models/listing')


// show all listing
module.exports.allListings = async (req, res) => {
    let allLists = await Listing.find()
    // res.send(allLists)
    res.render('listing/listings.ejs', { allLists })
}


// render new form
module.exports.renderNewForm = (req, res) => {
    res.render('listing/new.ejs')
}


// show listing
module.exports.showListing = async (req, res) => {
    let { id } = req.params

    let list = await Listing.findById(id)
        .populate({
            path: 'review',
            populate: {
                path: 'author'
            }
        })
        .populate({
            path : 'owner',
        })
    
    if (!list) {
        req.flash('error', 'Listing you have requested does not exist!');
        return res.redirect('/listing');
    }
    res.render('listing/show.ejs', { list });
}


// Create listing
module.exports.createListing = async (req, res) => {
    let url = req.file.path
    let filename = req.file.filename
    let newList = req.body.listing
    newList.owner = req.user._id
    newList.image = {url, filename}
    let list = await Listing.create(newList)
    req.flash('success', 'New list created.')
    res.redirect('/listing')
}


// render edit form
module.exports.renderEditFrom = async (req, res) => {
    let { id } = req.params
    let list = await Listing.findById(id)
    if (!list) {
        req.flash('error', 'Listing you have requested does not exist!');
        return res.redirect('/listing');
    }
    res.render('listing/edit.ejs', { list })
}

// Update listing in database
module.exports.updateListing = async (req, res) => {
    if (!req.body.listing) {
        throw new ExpressError(400, "Please provide valid data.")
    }
    let { id } = req.params
    await Listing.findByIdAndUpdate(id, { ...req.body.listing })
    req.flash('success', 'List Upadated Successfully!')
    res.redirect(`/listing/${id}`)
}


module.exports.deleteListing = async (req, res) => {
    let { id } = req.params
    await Listing.findByIdAndDelete(id)
    req.flash('success', 'List Deleted!')
    res.redirect('/listing')
}