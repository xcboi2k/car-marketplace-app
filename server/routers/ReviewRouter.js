const express = require('express');
const { addReview, updateReview, deleteReview, fetchUserReviews, fetchSellerReviews } = require('../controllers/ReviewController');

const router = express.Router();

router.post('/addReview', addReview )
router.post('/updateReview', updateReview)
router.delete('/deleteReview/:reviewId', deleteReview)
router.get('/fetchUserReviews', fetchUserReviews)
router.get('/fetchSellerReviews', fetchSellerReviews)

module.exports = router