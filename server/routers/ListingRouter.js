const express = require('express')
const { addListing, updateListing, deleteListing, fetchListings } = require('../controllers/ListingController')

const router = express.Router();

router.post('/addListing', addListing )
router.post('/updateListing', updateListing)
router.post('/deleteListing', deleteListing)
router.post('/fetchListings', fetchListings)

module.exports = router