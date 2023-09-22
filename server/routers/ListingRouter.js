const express = require('express')
const { addListing, updateListing, deleteListing } = require('../controllers/ListingController')

const router = express.Router();

router.post('/addListing', addListing )
router.post('/updateListing', updateListing)
router.post('/deleteListing', deleteListing)

module.exports = router