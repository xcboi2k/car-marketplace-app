const express = require('express')
const { addListing, updateListing, deleteListing, fetchUserListings, fetchSellerListings, fetchAllListings } = require('../controllers/ListingController')

const router = express.Router();

router.post('/addListing', addListing )
router.post('/updateListing', updateListing)
router.delete('/deleteListing/:listingId', deleteListing)
router.get('/fetchAllListings', fetchAllListings)
router.get('/fetchUserListings', fetchUserListings)
router.get('/fetchSellerListings', fetchSellerListings)

module.exports = router