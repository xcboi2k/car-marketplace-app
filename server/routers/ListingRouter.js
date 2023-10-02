const express = require('express')
const { addListing, updateListing, deleteListing, fetchUserListings, fetchSellerListings, fetchAllListings } = require('../controllers/ListingController')

const router = express.Router();

router.post('/addListing', addListing )
router.post('/updateListing', updateListing)
router.post('/deleteListing', deleteListing)
router.post('/fetchAllListings', fetchAllListings)
router.post('/fetchUserListings', fetchUserListings)
router.post('/fetchSellerListings', fetchSellerListings)

module.exports = router